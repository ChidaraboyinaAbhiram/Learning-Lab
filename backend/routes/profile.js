const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || '4a0bdf1a0b7e3c982d13e9f84d8d26cbb9f5a3a8f1457e03f7329d7bafe1f31a';

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Get user profile with completed experiments details
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate('completedExperiments', 'title difficulty slug')
      .select('-password');
    
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({
      username: user.username,
      email: user.email,
      points: user.points,
      completedExperiments: user.completedExperiments,
      completedCount: user.completedExperiments.length,
      joinedAt: user.createdAt
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

module.exports = router;
