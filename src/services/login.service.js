const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  if (!user || password !== user.password) {
    return { type: 400, message: 'Invalid fields' };
  }

  const token = createToken({ id: user.id });

  return { type: null, message: token };
};

module.exports = {
  login,
};