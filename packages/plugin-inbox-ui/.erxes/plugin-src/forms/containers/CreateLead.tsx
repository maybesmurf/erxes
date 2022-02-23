import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import { Alert, withProps } from '@erxes/ui/src/utils';
import {
  EmailTemplatesQueryResponse,
  EmailTemplatesTotalCountQueryResponse
} from '@erxes/ui-settings/src/emailTemplates/types';
import { queries as templatesQuery } from '@erxes/ui-settings/src/emailTemplates/graphql';
import { ConfigsQueryResponse } from '@erxes/ui-settings/src/general/types';
import {
  AddIntegrationMutationResponse,
  AddIntegrationMutationVariables
} from '@erxes/ui-settings/src/integrations/types';
import { AddFieldsMutationResponse } from '@erxes/ui-settings/src/properties/types';
import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { IRouterProps } from '@erxes/ui/src/types';
import Lead from '../components/Lead';
import { mutations } from '@erxes/ui-leads/src/graphql';
import { queries as settingsQueries } from '@erxes/ui-settings/src/general/graphql';
import { ILeadData } from '@erxes/ui-leads/src/types';

type Props = {
  emailTemplatesQuery: EmailTemplatesQueryResponse;
  emailTemplatesTotalCountQuery: EmailTemplatesTotalCountQueryResponse;
  configsQuery: ConfigsQueryResponse;
} & IRouterProps &
  AddIntegrationMutationResponse &
  AddFieldsMutationResponse;

type State = {
  isLoading: boolean;
  isReadyToSaveForm: boolean;
  doc?: {
    brandId: string;
    name: string;
    languageCode: string;
    lead: any;
    leadData: ILeadData;
    channelIds?: string[];
  };
};

class CreateLeadContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { isLoading: false, isReadyToSaveForm: false };
  }

  render() {
    const { addIntegrationMutation, history, emailTemplatesQuery, configsQuery } = this.props;
    const afterFormDbSave = id => {
      this.setState({ isReadyToSaveForm: false });

      if (this.state.doc) {
        const {
          leadData,
          brandId,
          name,
          languageCode,
          channelIds
        } = this.state.doc;

        addIntegrationMutation({
          variables: {
            formId: id,
            leadData,
            brandId,
            name,
            languageCode,
            channelIds
          }
        })
          .then(
            ({
              data: {
                integrationsCreateLeadIntegration: { _id }
              }
            }) => {
              Alert.success('You successfully added a form');

              history.push({
                pathname: '/forms',
                search: `?popUpRefetchList=true&showInstallCode=${_id}`
              });
            }
          )

          .catch(error => {
            Alert.error(error.message);

            this.setState({ isLoading: false });
          });
      }
    };

    const save = doc => {
      this.setState({ isLoading: true, isReadyToSaveForm: true, doc });
    };

    const updatedProps = {
      ...this.props,
      fields: [],
      save,
      afterFormDbSave,
      isActionLoading: this.state.isLoading,
      isReadyToSaveForm: this.state.isReadyToSaveForm,
      emailTemplates: emailTemplatesQuery.emailTemplates || [],
      configs: configsQuery.configs || []
    };

    return <Lead {...updatedProps} />;
  }
}

const withTemplatesQuery = withProps<Props>(
  compose(
    graphql<Props, EmailTemplatesQueryResponse>(
      gql(templatesQuery.emailTemplates),
      {
        name: 'emailTemplatesQuery',
        options: ({ emailTemplatesTotalCountQuery }) => ({
          variables: {
            perPage: emailTemplatesTotalCountQuery.emailTemplatesTotalCount
          }
        })
      }
    )
  )(CreateLeadContainer)
);

export default withProps<Props>(
  compose(
    graphql(gql(templatesQuery.totalCount), {
      name: 'emailTemplatesTotalCountQuery'
    }),
    graphql<{}, ConfigsQueryResponse>(gql(settingsQueries.configs), {
      name: 'configsQuery'
    }),
    graphql<
      {},
      AddIntegrationMutationResponse,
      AddIntegrationMutationVariables
    >(gql(mutations.integrationsCreateLeadIntegration), {
      name: 'addIntegrationMutation'
    })
  )(withRouter<Props>(withTemplatesQuery))
);