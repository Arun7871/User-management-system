const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register User Controller
const register = async (req, res) => {
    try {
      const { name, email, password, phone, role } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Determine the role
      let userRole = role || 'user'; // Default role to 'user' if not provided
  
      // Ensure only authorized requests can create super users
      if (userRole === 'superadmin') {
        const requestingUser = req.user; // Assume authentication middleware adds `req.user`
        if (!requestingUser || requestingUser.role !== 'superadmin') {
          return res.status(403).json({ message: 'Unauthorized to create super admin' });
        }
      }
  
      // Create a new user
      const user = new User({ name, email, phone, password, role: userRole });
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
  
      // Save the user
      await user.save();
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Login User Controller
const login = async (req, res) => {
  console.log("I got called")
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
