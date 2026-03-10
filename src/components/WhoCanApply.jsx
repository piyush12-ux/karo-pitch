import React from 'react';
import './WhoCanApply.css';

const categories = [
  { name: 'D2C Brands', icon: '🛍️', color: '#F97316' },
  { name: 'Consumer Startups', icon: '👥', color: '#2D6A4F' },
  { name: 'MSMEs', icon: '🏭', color: '#F97316' },
  { name: 'SaaS Startups', icon: '☁️', color: '#2D6A4F' },
  { name: 'Manufacturing', icon: '⚙️', color: '#F97316' },
  { name: 'Bharat-Focused', icon: '🇮🇳', color: '#2D6A4F' }
];

const WhoCanApply = () => {
  return (
    <section className="who-can-apply">
      <div className="container">
        <h2 className="section-title text-center">Who Can <span className="highlight">Apply?</span></h2>
        <p className="section-subtitle text-center">
          We're looking for passionate founders building across every sector. 
          If you're solving a real problem, we want to hear from you.
        </p>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" style={{ '--card-color': category.color }}>
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;