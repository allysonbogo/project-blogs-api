const { userSchema, categorySchema } = require('./schemas');

const validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error) return { type: 400, message: error.message };
  
  return { type: null, message: null };
};

const validateCategory = (category) => {
  const { error } = categorySchema.validate(category);
  if (error) return { type: 400, message: error.message };
  
  return { type: null, message: null };
};

module.exports = {
  validateUser,
  validateCategory,
};