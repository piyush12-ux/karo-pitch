import React from 'react';
import './FeaturedStartups.css';

const startups = [
  {
    name: 'RIDEasy',
    category: 'Mobility / D2C',
    description: 'Affordable EV rentals for last-mile delivery in tier-2 cities.',
    logo: '🛵',
    color: '#F97316'
  },
  {
    name: 'KisanMandi',
    category: 'Agri-Tech / Bharat',
    description: 'Digital platform connecting farmers directly with bulk buyers.',
    logo: '🌾',
    color: '#2D6A4F'
  },
  {
    name: 'SkillUp Bharat',
    category: 'EdTech / SaaS',
    description: 'Vernacular upskilling courses for students in small towns.',
    logo: '📚',
    color: '#F97316'
  }
];

const FeaturedStartups = () => {
  return (
    <section id="startups" className="featured-startups">
      <div className="container">
        <h2 className="section-title text-center">Startups from the <span className="highlight">KaroStartup Community</span></h2>
        <p className="section-subtitle text-center">
          Meet some of the amazing founders who've been part of our journey
        </p>
        
        <div className="startups-grid">
          {startups.map((startup, index) => (
            <div key={index} className="startup-card">
              <div className="startup-logo" style={{ backgroundColor: `${startup.color}20` }}>
                <span>{startup.logo}</span>
              </div>
              <div className="startup-info">
                <h3 className="startup-name">{startup.name}</h3>
                <p className="startup-category">{startup.category}</p>
                <p className="startup-description">{startup.description}</p>
              </div>
              <div className="startup-footer">
                <span className="startup-tag">Featured</span>
                <button className="startup-link">View Details →</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="startups-cta text-center">
          <button className="btn-primary">Explore All Startups →</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;