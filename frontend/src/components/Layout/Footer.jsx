import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Learning Lab Section */}
        <div className="footer-section">
          <h4>Learning Lab</h4>
          <p>Learn programming through hands-on, interactive experiments.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Experiments</a></li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="footer-section">
          <h4>Technologies</h4>
          <ul>
            <li>HTML &amp; CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Contact Section - NEW */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>📧 support@learninglab.com</li>
            <li>📞 +91 12345 67890</li>
            <li>🌐 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>💼 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Learning Lab. Built with React, Node.js &amp; MongoDB.</p>
      </div>
    </footer>
  );
};

export default Footer;
