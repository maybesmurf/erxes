import { IStage } from "@erxes/ui-cards/src/boards/types";
import Button from "@erxes/ui/src/components/Button";
import Icon from "@erxes/ui/src/components/Icon";
import { CloseModal, ModalFooter } from "@erxes/ui/src/styles/main";
import { __ } from "@erxes/ui/src/utils/core";
import CreateForm from "@erxes/ui-forms/src/forms/containers/CreateForm";
import EditForm from "@erxes/ui-forms/src/forms/containers/EditForm";
import { ShowPreview } from "@erxes/ui-forms/src/forms/styles";
import { IField } from "@erxes/ui/src/types";
import React from "react";
import Dialog from "@erxes/ui/src/components/Dialog";
import { ContentWrapper, PreviewWrapper } from "../styles";

type Props = {
  onChange: (stageId: string, name: string, value: string) => void;
  onHide: () => void;
  stage: IStage;
};

class FormBuilder extends React.Component<
  Props,
  { isReadyToSaveForm: boolean }
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isReadyToSaveForm: false,
    };
  }

  renderFooter = (items: number) => {
    if (items === 0) {
      return null;
    }

    return (
      <>
        <ShowPreview>
          <Icon icon="eye" /> {__("Form preview")}
        </ShowPreview>
        <ModalFooter>
          <Button
            btnStyle="simple"
            type="button"
            icon="cancel-1"
            onClick={this.closeModal}
          >
            Cancel
          </Button>

          <Button
            btnStyle="success"
            type="button"
            icon="check-circle"
            onClick={this.saveForm}
          >
            Save
          </Button>
        </ModalFooter>
      </>
    );
  };

  renderFormPreviewWrapper = (previewRenderer, fields: IField[]) => {
    return (
      <PreviewWrapper>
        {previewRenderer()}
        {this.renderFooter(fields ? fields.length : 0)}
      </PreviewWrapper>
    );
  };

  saveForm = () => {
    this.setState({ isReadyToSaveForm: true });
  };

  afterFormDbSave = (formId: string) => {
    const { stage, onChange, onHide } = this.props;

    onChange(stage._id, "formId", formId);
    onHide();

    this.setState({ isReadyToSaveForm: false });
  };

  closeModal = () => {
    this.props.onHide();
  };

  renderFormContent = () => {
    const { stage } = this.props;

    const props = {
      renderPreviewWrapper: this.renderFormPreviewWrapper,
      afterDbSave: this.afterFormDbSave,
      isReadyToSave: this.state.isReadyToSaveForm,
      hideOptionalFields: true,
      type: "growthHack",
    };

    if (stage.formId) {
      return <EditForm {...props} formId={stage.formId} />;
    }

    return <CreateForm {...props} />;
  };

  renderContent = () => {
    return <ContentWrapper>{this.renderFormContent()}</ContentWrapper>;
  };

  render() {
    return (
      <Dialog
        show={true}
        closeModal={this.closeModal}
        //   dialogClassName="modal-1000w"
        size="lg"
      >
        <CloseModal onClick={this.closeModal}>
          <Icon icon="times" />
        </CloseModal>
        {this.renderContent()}
      </Dialog>
    );
  }
}

export default FormBuilder;
