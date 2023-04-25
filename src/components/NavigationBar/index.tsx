import React, { useState } from 'react';

import './navigation-bar.css';

const NavigationBar = () => {

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="navigation-bar-container">
      <h1 onClick={(() => setPageIndex(0))}>About Us</h1>
      <h1 onClick={(() => setPageIndex(1))}>Home</h1>
      <h1 onClick={(() => setPageIndex(2))}>Contact</h1>
    </div>
  );
};

export default NavigationBar;
