const { Pool } = require('pg');
require('dotenv').config();

const connection = async () => {
    if (global.connection) return global.connection.connect();

    const credentials = {
      user: process.env.DB_USER,
      host: process.env.POSTGRESQL_DB_URL,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    }
    const pool = new Pool(credentials);

    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log(`Conexão com o BeeManager Database criada com sucesso às ${res.rows[0]?.now}!`);

    client.release();

    global.connection = pool;
    return pool.connect();
}
module.exports = connection;