const express = require('express');

const categoryController = require('../controllers/category.controller');
const { validateJWT } = require('../middlewares/auth.validation');

const router = express.Router();

router.post('/', validateJWT, categoryController.create);

router.get('/', validateJWT, categoryController.findAll);

module.exports = router;