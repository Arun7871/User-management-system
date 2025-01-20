const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser } = require('../controllers/adminController');  // Import controller

// Routes for admin actions
router.get('/users', getAllUsers);  // Get all users
router.delete('/users/:userId', deleteUser);  // Delete a user

module.exports = router;
