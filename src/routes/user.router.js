const express = require('express');

const userController = require('../controllers/user.controller');
const { validateJwt } = require('../middlewares/auth.validation');

const router = express.Router();

router.post('/', userController.create);

router.get('/', validateJwt, userController.findAll);

router.get('/:id', validateJwt, userController.findById);

module.exports = router;