const express = require('express');
const User = require('../models/User');
const router = express.Router();

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
router.get('/my-rank', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Not authenticated' });

    const jwt = require('jsonwebtoken');
    const JWT_SECRET = process.env.JWT_SECRET || '4a0bdf1a0b7e3c982d13e9f84d8d26cbb9f5a3a8f1457e03f7329d7bafe1f31a';
    const decoded = jwt.verify(token, JWT_SECRET);

    const allUsers = await User.find().select('username points').sort({ points: -1 });
    const userRank = allUsers.findIndex(u => u._id.toString() === decoded.userId) + 1;
    const user = allUsers.find(u => u._id.toString() === decoded.userId);

    res.json({
      rank: userRank,
      username: user?.username,
      points: user?.points,
      totalUsers: allUsers.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get rank' });
  }
});

module.exports = router;
