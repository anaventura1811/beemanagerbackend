const connection = require('../connection');

const createUser = async (userInfo) => {
  const {
    name,
    username,
    password
  } = userInfo;
  const queryText = `INSERT INTO users(name, username, password) VALUES(${name}, ${username}, ${password})`;

  await connection().then(async cl => await cl.query(queryText));
  try {
    await connection().then(async cl => await cl.query(queryText));
  } catch(e) {
    if (e) {
      console.log(e);
    }

  }
}