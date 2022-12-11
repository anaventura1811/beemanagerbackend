const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.TOKEN;

const JWT_SETTINGS = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, SECRET, JWT_SETTINGS);
  return token;
}

module.exports = generateToken;