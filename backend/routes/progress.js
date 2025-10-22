const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Experiment = require('../models/Experiment');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

router.post('/complete', authMiddleware, async (req, res) => {
  try {
    const { experimentId } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.completedExperiments.includes(experimentId)) {
      return res.json({ message: 'Already completed', points: user.points });
    }

    user.completedExperiments.push(experimentId);
    user.points += 10;
    await user.save();
    res.json({ message: 'Experiment completed!', points: user.points });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

module.exports = router;
