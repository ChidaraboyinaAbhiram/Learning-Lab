const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
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

// Get top users leaderboard
router.get('/top', async (req, res) => {
  try {
    const topUsers = await User.find()
      .select('username points completedExperiments')
      .sort({ points: -1 })
      .limit(10);

    const leaderboard = topUsers.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      points: user.points,
      completedCount: user.completedExperiments.length
    }));

    res.json({ leaderboard });
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// Get user's rank
router.get('/my-rank', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Efficient rank calculation: count users with more points
    const higherRankedUsers = await User.countDocuments({ points: { $gt: user.points } });
    const rank = higherRankedUsers + 1;

    const totalUsers = await User.countDocuments();

    res.json({
      rank,
      username: user.username,
      points: user.points,
      totalUsers
    });
  } catch (error) {
    console.error('Rank error:', error);
    res.status(500).json({ error: 'Failed to get rank' });
  }
});

module.exports = router;
