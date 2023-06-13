const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const { type, message } = await categoryService.create(req.body);
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const findAll = async (req, res) => {
  const { type, message } = await categoryService.findAll();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  create,
  findAll,
};