const express = require('express');

const userController = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/auth.validation');

const router = express.Router();

router.post('/', userController.create);

router.get('/', validateJWT, userController.findAll);

router.get('/:id', validateJWT, userController.findById);

module.exports = router;