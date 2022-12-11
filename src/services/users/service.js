const userModel = require('../../models/users/model');

const createUser = async (userInfo) => {
  const verifyUser = await Promise.resolve(userModel.getUser(userInfo));
  if (verifyUser) {
    return { error: 'Username already exists', message: 'Nome de usuário já está sendo utilizado'};
  } else {
    await userModel.createUser(userInfo);
    return { message: 'Cadastro ok', error: null };
  }
}

const getUser = async (userInfo) => {
  const user = await Promise.resolve(userModel.getUser(userInfo));
  if (user) {
    return user;
  } else {
    return { message: 'Usuário não encontrado', error: 'User not found'};
  }
}

module.exports = {
  createUser,
  getUser
}