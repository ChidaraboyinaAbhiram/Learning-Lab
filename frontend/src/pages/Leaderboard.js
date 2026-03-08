import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../styles/design-system.css';

// ✅ FIX 1: Use env variable instead of hardcoded localhost
const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ FIX 2: Added error state
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setError(null);
        const res = await axios.get(`${BASE}/leaderboard/top`); // ✅ Fixed URL
        // ✅ FIX 3: Safe fallback if response shape is unexpected
        setLeaderboard(res.data.leaderboard || res.data || []);

        if (token) {
          const rankRes = await axios.get(`${BASE}/leaderboard/my-rank`, { // ✅ Fixed URL
            headers: { Authorization: `Bearer ${token}` }
          });
          setMyRank(rankRes.data);
        }
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
        setError('Failed to load leaderboard. Please try again.'); // ✅ Show error to user
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [token]);

  if (loading) return (
    <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
      <div className="neon-text">Loading leaderboard...</div>
    </div>
  );

  // ✅ FIX 4: Show error message instead of blank screen
  if (error) return (
    <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
      <div style={{ color: 'var(--error-color)', fontSize: '1.2rem' }}>⚠️ {error}</div>
      <button
        className="btn-secondary"
        style={{ marginTop: '20px' }}
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="neon-text" style={{ fontSize: '3rem', marginBottom: '10px' }}>🏆 Leaderboard</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Top learners in the community</p>
      </div>

      {myRank && (
        <div className="glass-panel" style={{
          padding: '24px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(90deg, rgba(0, 242, 255, 0.1) 0%, rgba(112, 0, 255, 0.1) 100%)',
          border: '1px solid var(--primary-color)'
        }}>
          <div>
            <h3 style={{ margin: 0, color: 'var(--text-accent)' }}>Your Rank</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Keep learning to climb the ladder!</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>#{myRank.rank}</span>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {myRank.points} points • Top {Math.round((myRank.rank / myRank.totalUsers) * 100)}%
            </div>
          </div>
        </div>
      )}

      {/* ✅ FIX 5: Show message if leaderboard is empty */}
      {leaderboard.length === 0 ? (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '1.2rem' }}>No data yet. Be the first on the leaderboard! 🚀</p>
        </div>
      ) : (
        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 150px 150px',
            padding: '20px',
            borderBottom: '1px solid var(--border-color)',
            fontWeight: 'bold',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            letterSpacing: '0.05em'
          }}>
            <span>Rank</span>
            <span>Learner</span>
            <span style={{ textAlign: 'center' }}>Experiments</span>
            <span style={{ textAlign: 'right' }}>Points</span>
          </div>

          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 150px 150px',
                padding: '20px',
                borderBottom: '1px solid var(--border-color)',
                alignItems: 'center',
                backgroundColor: user?.username === entry.username ? 'rgba(0, 242, 255, 0.05)' : 'transparent',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = user?.username === entry.username ? 'rgba(0, 242, 255, 0.05)' : 'transparent'}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {entry.rank === 1 && '🥇'}
                {entry.rank === 2 && '🥈'}
                {entry.rank === 3 && '🥉'}
                {entry.rank > 3 && `#${entry.rank}`}
              </span>
              <span style={{
                fontWeight: '600',
                color: user?.username === entry.username ? 'var(--primary-color)' : 'white'
              }}>
                {entry.username} {user?.username === entry.username && '(You)'}
              </span>
              <span style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>{entry.completedCount}</span>
              <span style={{ textAlign: 'right', color: 'var(--success-color)', fontWeight: 'bold' }}>{entry.points} pts</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;