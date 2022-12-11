async function connection() {
    if (global.connection) return global.connection.connect();

    const { Pool } = require('pg');
    require('dotenv').config();

    const credentials = {
      user: process.env.DB_USER,
      host: process.env.POSTGRESQL_DB_URL,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    }
    const pool = new Pool(credentials);

    const client = await pool.connect();
    console.log("Conectado com o BeeManager Database criada com sucesso!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}
module.exports = connection;