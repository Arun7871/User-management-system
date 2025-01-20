const express = require('express');
const router = express.Router();
const { getUser, updateUser, deactivateAccount, reactivateAccount } = require('../controllers/userController');

// Routes
router.get('/:userId', getUser); // Get user by ID
router.put('/:userId', updateUser); // Update user info
router.put('/:userId/deactivate', deactivateAccount); // Deactivate account
router.put('/:userId/reactivate', reactivateAccount); // Reactivate account

module.exports = router;
