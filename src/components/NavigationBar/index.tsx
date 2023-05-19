import React from 'react';

import './navigation-bar.css';

const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="company-name">
        <p>Dirty Dog Grooming</p>
      </div>
      <div className="nav-tabs">
        <p className='nav-tab-link'>Home</p>
        <p className='nav-tab-link'>Services</p>
        <p className='nav-tab-link'>About</p>
        <p className='nav-tab-link'>Contact</p>
      </div>
    </div>
  );
};

export default NavigationBar;
