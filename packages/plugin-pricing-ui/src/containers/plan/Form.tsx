import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
// erxes
import DataWithLoader from '@erxes/ui/src/components/DataWithLoader';
import { Alert } from '@erxes/ui/src/utils';
// local
import { queries, mutations } from '../../graphql';
import FormComponent from '../../components/plan/Form';

const FormContainer = () => {
  // Hooks
  const navigate = useNavigate();
  const { id } = useParams();
  const [add] = useMutation(gql(mutations.pricingPlanAdd));
  const [edit] = useMutation(gql(mutations.pricingPlanEdit));

  const planDetail = id
    ? useQuery(gql(queries.pricingPlanDetail), {
        variables: { id: id },
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true
      })
    : {
        data: {},
        loading: false
      };

  // Declaration
  const planData = planDetail.data ? planDetail.data.pricingPlanDetail : {};

  // Functions
  const planAdd = (data: any) => {
    add({ variables: { doc: data } })
      .then(() => {
        Alert.success('Request successful!');
        navigate('/pricing/plans');
      })
      .catch((error: any) => {
        Alert.error(error.message);
      });
  };

  const planEdit = (data: any) => {
    edit({ variables: { doc: data } })
      .then(() => {
        Alert.success('Request successful!');
        navigate('/pricing/plans');
      })
      .catch((error: any) => {
        Alert.error(error.message);
      });
  };

  const submit = (data: any) => {
    if (id) planEdit(data);
    else planAdd(data);
  };

  return (
    <DataWithLoader
      data={<FormComponent submit={submit} data={id ? planData : {}} />}
      loading={id ? planDetail.loading : false}
    />
  );
};

export default FormContainer;
