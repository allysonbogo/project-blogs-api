const { Category } = require('../models');
const schema = require('./validations');

const create = async ({ name }) => {
  const error = schema.validateCategory({ name });
  if (error.message) return error;

  const createdCategory = await Category.create({ name });

  return { type: null, message: createdCategory };
};

module.exports = {
  create,
};