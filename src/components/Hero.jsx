import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-map"></div>
        <div className="hero-dots"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Pitch Your Startup to <span className="highlight">India's Top Investors</span>
        </h1>
        <p className="hero-subtitle">
          Karo Pitch is the bridge between Bharat's boldest founders and the capital they deserve. 
          We curate high-quality pitch events and provide a discovery platform to help you raise your next round.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary hero-btn">Apply to Pitch →</button>
          <button className="btn-secondary hero-btn">Explore Startups</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>₹100Cr+</h3>
            <p>Funding Raised</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Startups Pitched</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Active Investors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;