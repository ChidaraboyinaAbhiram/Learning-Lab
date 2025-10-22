import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Profile.css';

function Profile() {
  const { user, token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;
      try {
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  if (loading) return <div className="loading">Loading profile...</div>;
  if (!profile) return <div className="error">Failed to load profile</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          {profile.username.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h1>{profile.username}</h1>
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
          <div className="stat-number">
            {profile.completedCount > 0 
              ? Math.round((profile.completedCount / 10) * 100) + '%'
              : '0%'}
          </div>
          <div className="stat-label">Progress</div>
        </div>
      </div>

      <div className="completed-section">
        <h2>📚 Completed Experiments</h2>
        {profile.completedExperiments.length === 0 ? (
          <p className="empty-state">No experiments completed yet. Start learning!</p>
        ) : (
          <div className="completed-grid">
            {profile.completedExperiments.map((exp) => (
              <Link 
                to={`/experiment/${exp.slug || exp._id}`} 
                key={exp._id}
                className="completed-card"
              >
                <div className="completed-badge">✓</div>
                <h3>{exp.title}</h3>
                <span className={`difficulty ${exp.difficulty?.toLowerCase()}`}>
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
