const User = require('../models/User');

// Get user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user information
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Deactivate user account
const deactivateAccount = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the `isActive` flag to false
    user.isActive = false;
    await user.save();

    res.status(200).json({ message: 'Account deactivated successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
};

// Reactivate user account
const reactivateAccount = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the `isActive` flag to true
    user.isActive = true;
    await user.save();

    res.status(200).json({ message: 'Account reactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUser, updateUser, deactivateAccount, reactivateAccount };
