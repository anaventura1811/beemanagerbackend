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

module.exports = {
  createUser
}