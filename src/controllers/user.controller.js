const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);
  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

const findAll = async (req, res) => {
  const users = await userService.findAll();

  return res.status(200).json(users);
};

module.exports = {
  create,
  findAll,
};