import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import '../../styles/design-system.css';

function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header glass-panel" style={{
      borderRadius: 0,
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 18, 0.8)'
    }}>
      <div className="header-content container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" className="logo neon-text" style={{ fontSize: '1.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
          Learning Lab
        </Link>

        <nav className="nav-menu" style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'var(--text-primary)' }}>Home</Link>
          <Link to="/leaderboard" style={{ color: 'var(--text-primary)' }}>Leaderboard</Link>
          <Link to="/about" style={{ color: 'var(--text-primary)' }}>About</Link>
          <Link to="/profile" style={{ color: 'var(--text-primary)' }}>Profile</Link>
        </nav>

        <div className="auth-section" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={toggleDarkMode} className="theme-toggle-btn" style={{ background: 'transparent', fontSize: '1.2rem' }}>
            {darkMode ? '🌞' : '🌙 '}
          </button>
          {isAuthenticated ? (
            <>
              <span className="user-info" onClick={() => navigate('/profile')} style={{ cursor: 'pointer', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                👤 {user?.username} • {user?.points} pts
              </span>
              <button onClick={handleLogout} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}>Login</Link>
              <Link to="/register" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}>Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
