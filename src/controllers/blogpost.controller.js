const blogPostService = require('../services/blogpost.service');

const create = async (req, res) => {
  const { authorization: token } = req.headers;
  const { type, message } = await blogPostService.create(req.body, token);
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const findAll = async (req, res) => {
  const { type, message } = await blogPostService.findAll();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await blogPostService.findById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;
  const { type, message } = await blogPostService.update(req.body, id, token);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};