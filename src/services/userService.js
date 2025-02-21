const { createUser, findUserByEmail } = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function register({ username, email, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser({ username, email, password: hashedPassword });
}

async function login({ email, password }) {
  const user = await findUserByEmail(email);
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  return jwt.sign({ id: user.id }, config.jwtSecret);
}

module.exports = {
  register,
  login
};