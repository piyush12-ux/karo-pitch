import React from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Pitch Your Startup?</h2>
          <p className="cta-subtitle">
            Join the thousands of founders building the future of Bharat. Your journey starts here.
          </p>
          <div className="cta-buttons">
            <button className="btn-white">Apply Now →</button>
            <button className="btn-outline-white">Partner With Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;