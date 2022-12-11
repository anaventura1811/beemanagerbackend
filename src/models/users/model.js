const client = require('../connection');

const getUser = async (userInfo) => {
  const { username } = userInfo;
  const queryText = `SELECT username FROM users WHERE username = $1`;

  const values = [username];

  const user = await client.query(queryText, values).then(async res => res);
  if (user) return user?.rows[0];
  await client.end();

}

const createUser = async (userInfo) => {
  const {
    name,
    username,
    password
  } = userInfo;
  const queryText = `INSERT INTO users(name, username, password) VALUES($1, $2, $3)`;

  const values = [name, username,
    password
  ];

  try {
    await client.query(queryText, values).then(res => {
      console.log('response: ', { res});
      if (res) {
        return res;
      }
  });
    await client.end();
    return;

  } catch(e) {
    return e;

  }
}

module.exports = {
  createUser,
  getUser
}