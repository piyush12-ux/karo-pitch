import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Karo Pitch<span>by KaroStartup</span></h3>
            <p className="footer-description">
              Empowering founders across Bharat to connect with investors and raise funding.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/karo_startup_/" target="_blank" rel="noopener noreferrer" className="social-link">📷</a>
              <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" rel="noopener noreferrer" className="social-link">💼</a>
              <a href="https://x.com/karo_startup" target="_blank" rel="noopener noreferrer" className="social-link">🐦</a>
              <a href="https://www.facebook.com/karostartup" target="_blank" rel="noopener noreferrer" className="social-link">📘</a>
              <a href="https://www.youtube.com/@karostartup/videos" target="_blank" rel="noopener noreferrer" className="social-link">▶️</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#startups">Startups</a></li>
              <li><a href="#investors">Investors</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>For Founders</h4>
            <ul>
              <li><a href="#">Apply to Pitch</a></li>
              <li><a href="#">Pitch Deck Tips</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>For Investors</h4>
            <ul>
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Browse Startups</a></li>
              <li><a href="#">Investment Criteria</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Karo Pitch. A KaroStartup Initiative. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;