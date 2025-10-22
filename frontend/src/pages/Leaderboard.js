import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../styles/Leaderboard.css';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/leaderboard/top');
        setLeaderboard(res.data.leaderboard);

        if (token) {
          const rankRes = await axios.get('http://localhost:5000/api/leaderboard/my-rank', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setMyRank(rankRes.data);
        }
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [token]);

  if (loading) return <div className="loading">Loading leaderboard...</div>;

  return (
    <div className="leaderboard-page">
      <h1>🏆 Leaderboard</h1>
      <p className="subtitle">Top learners in the community</p>

      {myRank && (
        <div className="my-rank-card">
          <h3>Your Rank</h3>
          <div className="rank-details">
            <span className="rank-number">#{myRank.rank}</span>
            <span className="rank-info">
              {myRank.points} points • {myRank.totalUsers} total users
            </span>
          </div>
        </div>
      )}

      <div className="leaderboard-table">
        <div className="table-header">
          <span>Rank</span>
          <span>Username</span>
          <span>Experiments</span>
          <span>Points</span>
        </div>

        {leaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`table-row ${user?.username === entry.username ? 'highlight' : ''}`}
          >
            <span className="rank-badge">
              {entry.rank === 1 && '🥇'}
              {entry.rank === 2 && '🥈'}
              {entry.rank === 3 && '🥉'}
              {entry.rank > 3 && `#${entry.rank}`}
            </span>
            <span className="username">{entry.username}</span>
            <span className="completed">{entry.completedCount}</span>
            <span className="points">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
