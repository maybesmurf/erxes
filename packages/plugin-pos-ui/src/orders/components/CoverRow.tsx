import * as dayjs from 'dayjs';
import _ from 'lodash';
import Button from '@erxes/ui/src/components/Button';
import Detail from '../containers/CoverDetail';
import React from 'react';
import { ModalTrigger, confirm } from '@erxes/ui/src';
import { FinanceAmount } from '../../styles';
import { ICover } from '../types';

type Props = {
  cover: ICover;
  remove: (_id: string) => void;
};

const CoverRow = (props: Props) => {
  const { cover, remove } = props;

  const displayValue = (cover, name) => {
    const value = _.get(cover, name);
    return <FinanceAmount>{(value || 0).toLocaleString()}</FinanceAmount>;
  };

  const displayPaid = (cover, key) => {
    const { paidAmounts } = cover;
    const value = (
      (paidAmounts || []).filter((pa) => pa.title === key || pa.type === key) ||
      []
    ).reduce((sum, pa) => sum + pa.amount, 0);
    return (
      <FinanceAmount key={Math.random()}>
        {(value || 0).toLocaleString()}
      </FinanceAmount>
    );
  };

  const modalContent = (_props) => {
    return <Detail cover={cover} />;
  };

  const onClick = (e) => {
    e.stopPropagation();
  };

  const onRemove = () => {
    remove(cover._id || '');
  };

  const trigger = (
    <tr>
      <td key={'beginDate'}>{dayjs(cover.beginDate).format('lll')} </td>
      <td key={'endDate'}>{dayjs(cover.endDate).format('lll')}</td>
      <td key={'pos'}>{cover.posName}</td>
      <td key={'user'}>{cover.user ? cover.user.email : ''}</td>
      <td key={'actions'} onClick={onClick}>
        <Button
          btnStyle="warning"
          size="small"
          icon="external-link-alt"
          onClick={onRemove}
        >
          Delete
        </Button>
      </td>
    </tr>
  );

  return (
    <ModalTrigger
      title={`Order detail`}
      trigger={trigger}
      autoOpenKey="showProductModal"
      content={modalContent}
      size={'lg'}
    />
  );
};

export default CoverRow;
