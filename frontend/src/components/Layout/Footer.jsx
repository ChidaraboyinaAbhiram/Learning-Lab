import React from 'react';
import '../../styles/design-system.css';

const Footer = () => {
  return (
    <footer className="footer" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '60px 0 20px',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>

        {/* Learning Lab Section */}
        <div className="footer-section">
          <h4 className="neon-text" style={{ marginBottom: '20px' }}>Learning Lab</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Learn programming through hands-on, interactive experiments.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a></li>
            <li style={{ marginBottom: '10px' }}><a href="/about" style={{ color: 'var(--text-secondary)' }}>About</a></li>
            <li style={{ marginBottom: '10px' }}><a href="/" style={{ color: 'var(--text-secondary)' }}>Experiments</a></li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="footer-section">
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Technologies</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px' }}>HTML &amp; CSS</li>
            <li style={{ marginBottom: '10px' }}>JavaScript</li>
            <li style={{ marginBottom: '10px' }}>React</li>
            <li style={{ marginBottom: '10px' }}>Node.js</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px' }}>📧 abhiram092004@gmail.com</li>
            <li style={{ marginBottom: '10px' }}>📞 +91 63014 87658</li>
            <li style={{ marginBottom: '10px' }}>🌐 <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>GitHub</a></li>
            <li style={{ marginBottom: '10px' }}>💼 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom" style={{
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; 2025 Learning Lab. Built with React, Node.js &amp; MongoDB.</p>
      </div>
    </footer>
  );
};

export default Footer;
