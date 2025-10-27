const { ModelSchema, SchemaTypes, DatabaseModel } = require('@app-core/mongoose');

const modelName = 'notifications';
// Just a random comment
/**
 * @typedef {Object} ModelSchema
 * @property {String} _id
 * @property {Object} payload
 * @property {String} template
 * @property {String} recipient
 * @property {String} subject
 * @property {Number} nextResendTimestamp
 * @property {Number} resendDelayMillis
 * @property {String} context
 * @property {String} type
 * @property {String} userId
 * @property {Object} meta
 * @property {Number} created
 * @property {Number} updated
 */

const schemaConfig = {
  _id: { type: SchemaTypes.ULID, required: true },
  payload: { type: SchemaTypes.Mixed, required: true },
  template: { type: SchemaTypes.String, required: true },
  recipient: { type: SchemaTypes.String, required: true, index: true },
  subject: { type: SchemaTypes.String, required: true },
  nextResendTimestamp: { type: SchemaTypes.Number, required: true },
  resendDelayMillis: { type: SchemaTypes.Number, required: true },
  context: { type: SchemaTypes.String, required: true, index: true },
  type: { type: SchemaTypes.String, required: true, index: true },
  userId: { type: SchemaTypes.String, required: true, index: true },
  meta: { type: SchemaTypes.Mixed },
  created: { type: SchemaTypes.Number, required: true },
  updated: { type: SchemaTypes.Number, required: true },
};

const modelSchema = new ModelSchema(schemaConfig, { collection: modelName });

/** @type {ModelSchema} */
module.exports = DatabaseModel.model(modelName, modelSchema);
