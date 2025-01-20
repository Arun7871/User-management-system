const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');  // Import controller

// Routes for authentication
router.post('/register', register);  // Register a user
router.post('/login', login);  // Login a user

module.exports = router;
