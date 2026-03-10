import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '📝',
    number: '1',
    title: 'Apply',
    description: 'Submit your pitch deck and basic info in minutes.'
  },
  {
    icon: '✓',
    number: '2',
    title: 'Get Shortlisted',
    description: 'Our team at KaroStartup reviews and selects the most promising founders.'
  },
  {
    icon: '🎤',
    number: '3',
    title: 'Pitch Live',
    description: 'Present your startup to active investors during curated pitch events.'
  },
  {
    icon: '📈',
    number: '4',
    title: 'Raise & Scale',
    description: 'Connect with interested investors and secure funding to grow.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title text-center">Your 4-Step Journey to <span className="highlight">Funding</span></h2>
        <p className="section-subtitle text-center">
          Simple, transparent, and designed for founders across Bharat
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;