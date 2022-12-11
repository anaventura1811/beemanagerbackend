const connection = require('../connection');

const getUser = async (userInfo) => {
  const { username } = userInfo;
  const queryText = `SELECT username FROM users WHERE username = $1`;

  const values = [username];
  const pgClient = await connection();
  const user = await pgClient.query(queryText, values).then(async res => res);
  await pgClient.release();
  if (user) return user?.rows[0];

}

const createUser = async (userInfo) => {
  const {
    name,
    username,
    password
  } = userInfo;
  const pgClient = await connection();
  const queryText = `INSERT INTO users(name, username, password) VALUES($1, $2, $3)`;

  const values = [name, username,
    password
  ];

  try {
    await pgClient.query(queryText, values).then(res => res);
    await pgClient.release();
    return;

  } catch(e) {
    return e;

  }
}

module.exports = {
  createUser,
  getUser
}