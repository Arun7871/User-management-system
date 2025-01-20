const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1]; // Assumes "Bearer <token>" format
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID from the token payload to the request object
    req.user = decoded.id;

    // Check if the user exists and is active
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isActive) {
      return res
        .status(403)
        .json({ message: 'Account is deactivated. Please contact support.' });
    }

    // Attach the user object to the request for further use
    req.userDetails = user;

    next();
  } catch (error) {
    console.error('Error in auth middleware:', error.message);

    // Send appropriate error responses based on the type of error
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token, authorization denied' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired, please login again' });
    }

    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;
