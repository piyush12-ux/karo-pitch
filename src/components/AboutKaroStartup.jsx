import React from 'react';
import './AboutKaroStartup.css';

const stats = [
  { number: '1M+', label: 'Community Members' },
  { number: '10K+', label: 'Startups Supported' },
  { number: '5K+', label: 'Stories Published' },
  { number: '2020', label: 'Founded In' }
];

const AboutKaroStartup = () => {
  return (
    <section className="about-karostartup">
      <div className="container">
        <div className="grid-2">
          <div className="about-ks-content">
            <h2 className="section-title">Built by the Team Behind <span className="highlight">KaroStartup</span></h2>
            <p className="about-ks-text">
              KaroStartup began in 2020 as a small college project and has grown into a global 
              media platform with a community of over 1 million founders and enthusiasts.
            </p>
            <p className="about-ks-text">
              We've published thousands of startup stories, connected 10,000+ startups with resources, 
              and built the largest community for grassroots entrepreneurship in India. Karo Pitch is 
              our next step in giving founders the platform they deserve—not just to tell their story, 
              but to write its next chapter with funding.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-ks-image">
            <div className="ks-card">
              <div className="ks-card-header">
                <span className="ks-badge">Since 2020</span>
                <h4>KaroStartup</h4>
              </div>
              <div className="ks-card-content">
                <div className="ks-milestone">
                  <span>🚀</span>
                  <div>
                    <strong>Global Media Platform</strong>
                    <p>Reaching founders everywhere</p>
                  </div>
                </div>
                <div className="ks-milestone">
                  <span>📱</span>
                  <div>
                    <strong>1M+ Community</strong>
                    <p>Across all platforms</p>
                  </div>
                </div>
                <div className="ks-milestone">
                  <span>📝</span>
                  <div>
                    <strong>5K+ Stories</strong>
                    <p>Of real entrepreneurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKaroStartup;