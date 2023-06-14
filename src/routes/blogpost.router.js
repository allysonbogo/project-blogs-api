const express = require('express');

const blogPostController = require('../controllers/blogpost.controller');
const { validateJWT } = require('../middlewares/auth.validation');
const { validateBlogPost, validateBlogPostUpdate } = require('../middlewares/blogpost.validation');

const router = express.Router();

router.post('/', validateJWT, validateBlogPost, blogPostController.create);

router.get('/', validateJWT, blogPostController.findAll);

router.get('/:id', validateJWT, blogPostController.findById);

router.put('/:id', validateJWT, validateBlogPostUpdate, blogPostController.update);

module.exports = router;