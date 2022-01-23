import { IUser } from 'erxes-ui/lib/auth/types';
import { ICommonDoc } from '../common/types';

export interface ILotteryDoc extends ICommonDoc {
  status: string
}

export interface ILottery extends ILotteryDoc {
  _id: string;
  owner: IUser;
}

// mutation types
export type AddMutationResponse = {
  lotteriesAdd: (params: { variables: ILotteryDoc }) => Promise<any>;
};

export type EditMutationResponse = {
  lotteriesEdit: (params: { variables: ILottery }) => Promise<any>;
};

export type RemoveMutationVariables = {
  _ids: string[];
};

export type RemoveMutationResponse = {
  lotteriesRemove: (params: { variables: RemoveMutationVariables }) => Promise<any>;
};

// query types
export type MainQueryResponse = {
  lotteriesMain: { list: ILottery[]; totalCount: number };
  loading: boolean;
  refetch: () => void;
};

export type LotteriesQueryResponse = {
  lotteries: ILottery[];
  loading: boolean;
  refetch: () => void;
};

export type DetailQueryResponse = {
  lotteryDetail: ILottery;
  loading: boolean;
};