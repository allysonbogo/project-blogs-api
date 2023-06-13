const { User } = require('../models');
const schema = require('./validations');
const { createToken } = require('../utils/JWT');

const create = async ({ displayName, email, password, image }) => {
  const error = schema.validateUser({ displayName, email, password });
  if (error.message) return error;

  const user = await User.findOne({ where: { email } });
  if (user) {
    return { type: 409, message: 'User already registered' };
  }

  const createdUser = await User.create(
    { displayName, email, password, image: image || '' },
  );
  const token = createToken({ id: createdUser.id });

  return { type: null, message: token };
};

module.exports = {
  create,
};