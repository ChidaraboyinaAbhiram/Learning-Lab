import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Lab Books</h4>
                    <p>Learn programming through hands-on, interactive experiments.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#experiments">Experiments</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Technologies</h4>
                    <ul>
                        <li>HTML &amp; CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 Lab Books. Built with React, Node.js &amp; MongoDB.
            </div>
        </footer>

    );
};

export default Footer;
