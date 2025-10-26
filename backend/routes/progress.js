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

    // ADD DEBUGGING
    console.log('📊 Progress Complete Request:');
    console.log('  User ID:', req.userId);
    console.log('  Experiment ID:', experimentId);

    const user = await User.findById(req.userId);

    if (!user) {
      console.log('❌ User not found:', req.userId);
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('✅ User found:', user.username, 'Current points:', user.points);

    if (user.completedExperiments.includes(experimentId)) {
      console.log('⚠️ Already completed');
      return res.json({ message: 'Already completed', points: user.points });
    }

    user.completedExperiments.push(experimentId);
    user.points += 10;
    await user.save();

    console.log('🎉 Points added! New points:', user.points);

    res.json({ message: 'Experiment completed!', points: user.points });
  } catch (error) {
    console.error('❌ Error in complete route:', error);
    res.status(500).json({ error: 'Failed to update progress', details: error.message });
  }
});


module.exports = router;
