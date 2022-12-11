const userService = require('../../services/users/service');
const httpStatusCode = require('../../utils/httpStatus');

const createUser = async (req, res) => {
  const { name, password, username } = req.body;
  const newUser = {
    name, 
    password,
    username
  };
  const request = await userService.createUser(newUser);
  if (request && request.error) {
    return res.status(httpStatusCode.CONFLICT_STATUS).json(request);
  } else {
    return res.status(httpStatusCode.HTTP_CREATE_STATUS).json({ message: 'Cadastro realizado com sucesso!'});
  }
}

module.exports = { 
  createUser
};