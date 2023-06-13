const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);
  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

module.exports = {
  create,
};