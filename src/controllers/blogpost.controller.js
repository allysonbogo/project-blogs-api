const blogPostService = require('../services/blogpost.service');

const create = async (req, res) => {
  const { authorization: token } = req.headers;
  const { type, message } = await blogPostService.create(req.body, token);
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  create,
};