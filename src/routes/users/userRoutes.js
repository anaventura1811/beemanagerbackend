const express = require('express');
const userController = require('../../controllers/users/controller');

const router = express.Router();
// inserir depois import das validações

router.post('/', userController.createUser);

module.exports = router;