const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);
  
  if (type) return res.status(type).json({ message });

  return res.status(201).json({ token: message });
};

const findAll = async (req, res) => {
  const { type, message } = await userService.findAll();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.findById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const remove = async (req, res) => {
  const { authorization: token } = req.headers;
  
  await userService.remove(token);

  return res.status(204).end();
};

module.exports = {
  create,
  findAll,
  findById,
  remove,
};