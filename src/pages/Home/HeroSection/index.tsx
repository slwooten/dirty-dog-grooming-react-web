import React from 'react';

import './hero-section.css';

// logo
import logoSrc from '../../../images/dirty-dog-grooming-logo.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-logo">
        <img src={logoSrc} alt='logo' />
      </div>
      <div className="hero-text">
        <h1>The Best Dog Groomers in Town</h1>
        <p>For a pawfect look and feel 🐾</p>
      </div>
    </div>
  );
};

export default HeroSection;
