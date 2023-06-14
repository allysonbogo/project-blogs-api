const express = require('express');

const blogPostController = require('../controllers/blogpost.controller');
const { validateJWT } = require('../middlewares/auth.validation');
const { validateBlogPost } = require('../middlewares/blogpost.validation');

const router = express.Router();

router.post('/', validateJWT, validateBlogPost, blogPostController.create);

router.get('/', validateJWT, blogPostController.findAll);

router.get('/:id', validateJWT, blogPostController.findById);

module.exports = router;