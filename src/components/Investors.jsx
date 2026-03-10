import React from 'react';
import './Investors.css';

const investors = [
  { name: 'Angel Fund', logo: '💰' },
  { name: 'Early-Stage VC', logo: '📊' },
  { name: 'Micro VC', logo: '💎' },
  { name: 'Family Office', logo: '🏦' },
  { name: 'Angel Network', logo: '🤝' },
  { name: 'Corporate VC', logo: '🏢' }
];

const Investors = () => {
  return (
    <section id="investors" className="investors">
      <div className="container">
        <h2 className="section-title text-center">Meet the <span className="highlight">Investors</span> Looking for You</h2>
        <p className="section-subtitle text-center">
          Angel investors, micro-VCs, and family offices from across India attend Karo Pitch events, 
          actively searching for their next big investment.
        </p>
        
        <div className="investors-grid">
          {investors.map((investor, index) => (
            <div key={index} className="investor-card">
              <div className="investor-logo">{investor.logo}</div>
              <p className="investor-name">{investor.name}</p>
            </div>
          ))}
        </div>
        
        <div className="investors-cta">
          <p>Want to join as an investor?</p>
          <button className="btn-secondary">Become a Partner →</button>
        </div>
      </div>
    </section>
  );
};

export default Investors;