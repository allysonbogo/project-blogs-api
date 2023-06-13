const { Category } = require('../models');
const schema = require('./validations');

const create = async ({ name }) => {
  const error = schema.validateCategory({ name });
  if (error.message) return error;

  const createdCategory = await Category.create({ name });

  return { type: null, message: createdCategory };
};

const findAll = async () => {
  const categories = await Category.findAll();
  
  return { type: null, message: categories };
};

module.exports = {
  create,
  findAll,
};