

// src/controllers/userController.js
const { register, login } = require('../services/userService');

async function registerUser(req, res) {
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const token = await login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser
};



