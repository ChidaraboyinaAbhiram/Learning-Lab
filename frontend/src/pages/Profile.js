import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Profile.css';

// ✅ FIX 1: Use env variable instead of hardcoded localhost
const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function Profile() {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ FIX 2: Added error state

  useEffect(() => {
    const fetchProfile = async () => {
      // ✅ FIX 3: If no token, stop loading instead of hanging forever
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${BASE}/profile`, { // ✅ Fixed URL
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        setError('Failed to load profile. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <div className="loading">Loading profile...</div>;

  // ✅ FIX 4: Show "please login" if no token instead of generic error
  if (!token) return (
    <div className="error" style={{ textAlign: 'center', padding: '80px 20px' }}>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Please login to view your profile.</p>
      <Link to="/login" className="btn-primary">Go to Login</Link>
    </div>
  );

  if (error) return <div className="error">{error}</div>;
  if (!profile) return <div className="error">Failed to load profile</div>;

  // ✅ FIX 5: Use totalExperiments from API if available, fallback to 10
  const totalExperiments = profile.totalExperiments || 10;
  const progressPercent = profile.completedCount > 0
    ? Math.round((profile.completedCount / totalExperiments) * 100)
    : 0;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          {profile.username.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h2>{profile.username}</h2>
          <p className="email">{profile.email}</p>
          <p className="joined">
            Joined {new Date(profile.joinedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{profile.points}</div>
          <div className="stat-label">Total Points</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{profile.completedCount}</div>
          <div className="stat-label">Completed Experiments</div>
        </div>
        <div className="stat-card">
          {/* ✅ FIX 5: Dynamic progress, not hardcoded /10 */}
          <div className="stat-number">{progressPercent}%</div>
          <div className="stat-label">Progress</div>
        </div>
      </div>

      <div className="completed-section">
        <h3>📚 Completed Experiments</h3>
        {profile.completedExperiments.length === 0 ? (
          <p className="empty-state">No experiments completed yet. <Link to="/">Start learning!</Link></p>
        ) : (
          <div className="completed-grid">
            {profile.completedExperiments.map((exp) => (
              <Link
                to={`/experiment/${exp.slug || exp._id}`}
                key={exp._id}
                className="completed-card"
              >
                <div className="completed-badge">✓</div>
                <h4>{exp.title}</h4>
                <span className={`difficulty ${exp.difficulty?.toLowerCase() || 'beginner'}`}>
                  {exp.difficulty || 'Beginner'}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;