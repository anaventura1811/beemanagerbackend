const { Client } = require('pg');

require('dotenv').config();


const credentials = {
  user: process.env.DB_USER,
  host: process.env.POSTGRESQL_DB_URL,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}

const client = new Client(credentials)

const connection = async () => {
  await client.connect((error) => {
    if (error) throw error;
    console.log('connected to db');
  })
} 

module.exports = connection;
  