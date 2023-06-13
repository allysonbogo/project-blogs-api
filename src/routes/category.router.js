const express = require('express');

const categoryController = require('../controllers/category.controller');
const { validateJwt } = require('../middlewares/auth.validation');

const router = express.Router();

router.post('/', validateJwt, categoryController.create);

router.get('/', validateJwt, categoryController.findAll);

module.exports = router;