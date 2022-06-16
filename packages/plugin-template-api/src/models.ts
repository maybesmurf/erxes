import * as Random from 'meteor-random';
import { Model, model } from 'mongoose';
import * as _ from 'underscore';
import { Document, Schema } from 'mongoose';

/*
 * Mongoose field options wrapper
 */
const field = options => {
  const { pkey, type, optional } = options;

  if (type === String && !pkey && !optional) {
    options.validate = /\S+/;
  }

  // TODO: remove
  if (pkey) {
    options.type = String;
    options.default = () => Random.id();
  }

  return options;
};

export interface ITemplate {
  name: string;
}

export interface ITemplateDocument extends ITemplate, Document {
  _id: string;
  createdAt: Date;
  order?: string;
  relatedIds?: string[];
}

export const templateSchema = new Schema({
  _id: field({ pkey: true }),
  name: field({ type: String, label: 'Name' })
});

export interface ITemplateModel extends Model<ITemplateDocument> {
  createTemplate(doc: ITemplate): Promise<ITemplateDocument>;
}

class Template {
  public static async createTemplate(doc) {
    const template = await Templates.create(doc);
    return template;
  }
}

templateSchema.loadClass(Template);

const Templates = model<ITemplateDocument, ITemplateModel>(
  'templates',
  templateSchema
);

export { Templates };