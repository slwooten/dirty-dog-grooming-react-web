import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button';

import './navigation-bar.css';

const NavigationBar = () => {

  const { pathname } = useLocation()

  const styles = {
    navSelected: {
      borderBottom: 'solid rgb(220, 202, 182) 2px',
      color: 'rgb(220, 202, 182)'
    },
    navUnSelected: {
      borderBottom: 'solid white 2px',
      color: 'rgb(35, 28, 24)'
    }
  }

  return (
    <div className="navigation-bar-container">
      <div className="nav-bar-link-container">
        <Link style={pathname === "/about-us" ? styles.navSelected : styles.navUnSelected} className='nav-bar-link' to="/about-us">
          <h1>About Us</h1>
        </Link>
      </div>
      <div className="nav-bar-link-container">
        <Link style={pathname === "/" ? styles.navSelected : styles.navUnSelected} className='nav-bar-link' to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div className="nav-bar-link-container">
        <Link style={pathname === "/contact" ? styles.navSelected : styles.navUnSelected} className='nav-bar-link' to="/contact">
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
