const httpStatus = require('../utils/httpStatus');
const userModel = require('../models/users/model');

const validationError = { message: 'Todos os campos devem ser preenchidos' };
const invalidUsernameOrPassword = { message: 'Usuário ou senha incorreto' };

const validateEmail = async (req, res, next) => {
  const { username, password } = req.body;
  
}