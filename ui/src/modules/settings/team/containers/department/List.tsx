import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo';

import Spinner from 'modules/common/components/Spinner';
import List from '../../components/department/List';
import { queries } from '../../graphql';
import { __ } from 'modules/common/utils';
import Box from 'modules/common/components/Box';
import ErrorMsg from 'modules/common/components/ErrorMsg';
import { ErrorContainer } from '../../styles';

export default function ListContainer() {
  const listQuery = useQuery(gql(queries.departments));

  if (listQuery.loading) {
    return <Spinner />;
  }

  if (listQuery.error) {
    return (
      <Box isOpen={true} title={__('Department')} name="showDepartment">
        <ErrorContainer>
          <ErrorMsg>{listQuery.error.message}</ErrorMsg>
        </ErrorContainer>
      </Box>
    );
  }

  return <List listQuery={listQuery} />;
}