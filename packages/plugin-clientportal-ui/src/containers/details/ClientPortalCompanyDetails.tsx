import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import EmptyState from '@erxes/ui/src/components/EmptyState';
import Spinner from '@erxes/ui/src/components/Spinner';
import { withProps } from '@erxes/ui/src/utils';
import React from 'react';
import { graphql } from 'react-apollo';
import { ClientPoratlUserDetailQueryResponse } from '../../types';
import { IUser } from '@erxes/ui/src/auth/types';
import { queries } from '../../graphql';
import ClientPortalCompanyDetails from '../../components/detail/ClientPortalCompanyDetails';

type Props = {
  id: string;
  history: any;
};

type FinalProps = {
  clientPortalUserDetailQuery: ClientPoratlUserDetailQueryResponse;
  currentUser: IUser;
} & Props;

function CompanyDetailsContainer(props: FinalProps) {
  const { id, clientPortalUserDetailQuery, currentUser } = props;

  if (clientPortalUserDetailQuery.loading) {
    return <Spinner objective={true} />;
  }

  if (!clientPortalUserDetailQuery.clientPortalUserDetail) {
    return (
      <EmptyState
        text="ClientPortal User not found"
        image="/images/actions/17.svg"
      />
    );
  }

  const updatedProps = {
    ...props,
    clientPortalUser:
      clientPortalUserDetailQuery.clientPortalUserDetail || ({} as any),
    currentUser
  };

  return <ClientPortalCompanyDetails {...updatedProps} />;
}

export default withProps<Props>(
  compose(
    graphql<Props, ClientPoratlUserDetailQueryResponse, { _id: string }>(
      gql(queries.clientPortalUserDetail),
      {
        name: 'clientPortalUserDetailQuery',
        options: ({ id }) => ({
          variables: {
            _id: id
          }
        })
      }
    )
  )(CompanyDetailsContainer)
);
