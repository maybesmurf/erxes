import { FormControl, TextInfo, ModalTrigger } from 'erxes-ui';
import React from 'react';
import Form from '../containers/Form';
import { ILotteryCompaign } from '../types';

type Props = {
  lotteryCompaign: ILotteryCompaign;
  history: any;
  isChecked: boolean;
  toggleBulk: (lotteryCompaign: ILotteryCompaign, isChecked?: boolean) => void;
};

class Row extends React.Component<Props> {
  modalContent = props => {
    const { lotteryCompaign } = this.props;

    const updatedProps = {
      ...props,
      lotteryCompaign
    }

    return (
      <Form {...updatedProps} />
    )
  };

  render() {
    const { lotteryCompaign, history, toggleBulk, isChecked } = this.props;

    const onChange = e => {
      if (toggleBulk) {
        toggleBulk(lotteryCompaign, e.target.checked);
      }
    };

    const onClick = e => {
      e.stopPropagation();
    };

    const {
      _id,
      title,
      startDate,
      endDate,
      status,

    } = lotteryCompaign;

    const trigger = (
      <tr key={_id}>
        <td onClick={onClick}>
          <FormControl
            checked={isChecked}
            componentClass="checkbox"
            onChange={onChange}
          />
        </td>
        <td>{title}</td>
        <td>{new Date(startDate).toLocaleDateString()}</td>
        <td>{new Date(endDate).toLocaleDateString()}</td>
        <td>
          <TextInfo>{status}</TextInfo>
        </td>
      </tr>
    )

    return (
      <ModalTrigger
        size={'lg'}
        title="Edit lottery compaign"
        trigger={trigger}
        autoOpenKey="showProductModal"
        content={this.modalContent}
      />

    );
  }
}

export default Row;