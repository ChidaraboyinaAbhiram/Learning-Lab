import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {useTheme} from '../../context/ThemeContext';

function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const {darkMode, toggleDarkMode} = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Learning Lab
        </Link>
        
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <div className="auth-section">
          <button onClick={toggleDarkMode} className="theme-toggle-btn">
            {darkMode ? '🌞' : '🌙 '}
          </button>
          {isAuthenticated ? (
            <>
              <span className="user-info" onClick={() => navigate('/profile')}>
                👤 {user?.username} • {user?.points} pts
              </span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-link">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
