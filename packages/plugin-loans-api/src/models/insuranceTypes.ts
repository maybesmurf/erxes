import {
  IInsuranceType,
  insuranceTypeSchema,
  IInsuranceTypeDocument
} from './definitions/insuranceTypes';
import { Model, FilterQuery } from 'mongoose';
import { IModels } from '../connectionResolver';

export interface IInsuranceTypeModel extends Model<IInsuranceTypeDocument> {
  getInsuranceType(selector: FilterQuery<IInsuranceTypeDocument>);
  createInsuranceType(doc: IInsuranceType);
  updateInsuranceType(_id: string, doc: IInsuranceType);
  removeInsuranceTypes(_ids: string[]);
}

export const loadInsuranceTypeClass = (models: IModels) => {
  class InsuranceType {
    /**
     *
     * Get InsuranceType
     */

    public static async getInsuranceType(
      selector: FilterQuery<IInsuranceTypeDocument>
    ) {
      const insuranceType = await models.InsuranceTypes.findOne(selector);

      if (!insuranceType) {
        throw new Error('InsuranceType not found');
      }

      return insuranceType;
    }

    /**
     * Create a insuranceType
     */
    public static async createInsuranceType(doc: IInsuranceType) {
      if (!doc.companyId) throw new Error('Company is required');
      return await models.InsuranceTypes.create(doc);
    }

    /**
     * Update InsuranceType
     */
    public static async updateInsuranceType(
      _id: string,
      doc: IInsuranceTypeDocument
    ) {
      await models.InsuranceTypes.updateOne({ _id }, { $set: doc });

      return await models.InsuranceTypes.findOne({ _id });
    }

    /**
     * Remove InsuranceType
     */
    public static async removeInsuranceTypes(_ids: string[]) {
      // await models.InsuranceTypes.getInsuranceTypeCatogery(models, { _id });
      // TODO: check collateralsData
      return await models.InsuranceTypes.deleteMany({ _id: { $in: _ids } });
    }
  }
  insuranceTypeSchema.loadClass(InsuranceType);
  return insuranceTypeSchema;
};
