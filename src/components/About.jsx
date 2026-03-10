import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="grid-2">
          <div className="about-content">
            <h2 className="section-title">More Than a Pitch. <span className="highlight">A Launchpad.</span></h2>
            <p className="about-text">
              Thousands of founders across Bharat are building amazing businesses but lack access 
              to the right investors. Karo Pitch was created to change that.
            </p>
            <p className="about-text">
              We combine the power of KaroStartup's massive community with curated investor access 
              to create a simple, transparent path from application to funding. Our mission is to 
              democratize access and ensure the next big success story can come from any corner of India.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Pan-India Reach</h4>
                  <p>From metros to tier-3 cities</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <div>
                  <h4>Curated Matches</h4>
                  <p>Right investors for your stage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-grid">
              <div className="grid-item grid-item-1"></div>
              <div className="grid-item grid-item-2"></div>
              <div className="grid-item grid-item-3"></div>
              <div className="grid-item grid-item-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;