import { Document, Model, Schema } from "mongoose";
import { IModels } from "../connectionResolver";
import { getValueAsString } from "../utils";

export interface IConfig {
  code: string;
  value: string;
}

export interface ISESConfig {
  accessKeyId: string;
  region: string;
  secretAccessKey: string;
}
export interface IConfigDocument extends IConfig, Document {
  _id: string;
}

export const configsSchema = new Schema({
  code: { type: String, label: "Code", unique: true },
  value: { type: String, label: "Value" }
});

export interface IConfigModel extends Model<IConfigDocument> {
  getConfig(code: string): Promise<IConfigDocument>;
  updateConfigs(configsMap): Promise<void>;
  createOrUpdateConfig({ code, value }: IConfig): IConfigDocument;
  getSESConfigs(): Promise<ISESConfig>;
}

export const loadConfigClass = (models: IModels) => {
  class Config {
    /**
     * Get a Config
     */
    public static async getConfig(code: string) {
      const config = await models.Configs.findOne({ code });

      if (!config) {
        return { value: "" };
      }

      return config;
    }

    /**
     * Create or update config
     */
    public static async createOrUpdateConfig({
      code,
      value
    }: {
      code: string;
      value: string[];
    }) {
      const obj = await models.Configs.findOne({ code });

      if (obj) {
        await models.Configs.updateOne({ _id: obj._id }, { $set: { value } });

        return models.Configs.findOne({ _id: obj._id });
      }

      return models.Configs.create({ code, value });
    }

    /**
     * Update configs
     */
    public static async updateConfigs(configsMap) {
      const codes = Object.keys(configsMap);

      for (const code of codes) {
        if (!code) {
          continue;
        }

        const value = configsMap[code];
        const doc = { code, value };

        await models.Configs.createOrUpdateConfig(doc);
      }
    }

    /**
     * Get a Config
     */
    public static async getSESConfigs() {
      const accessKeyId = await getValueAsString(
        models,
        "accessKeyId",
        "AWS_SES_ACCESS_KEY_ID"
      );
      const secretAccessKey = await getValueAsString(
        models,
        "secretAccessKey",
        "AWS_SES_SECRET_ACCESS_KEY"
      );
      const region = await getValueAsString(models, "region", "AWS_REGION");
      const unverifiedEmailsLimit = await getValueAsString(
        models,
        "unverifiedEmailsLimit",
        "EMAILS_LIMIT",
        "100"
      );

      return {
        accessKeyId,
        secretAccessKey,
        region,
        unverifiedEmailsLimit
      };
    }
  }

  configsSchema.loadClass(Config);

  return configsSchema;
};
