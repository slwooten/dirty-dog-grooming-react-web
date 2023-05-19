import React from 'react';
import { Link } from 'react-router-dom';

// css
import './header.css';

// images 
import logoSrc from '../../images/dirty-dog-grooming-logo.png';

const Header = () => {
  return (
    // <div className="header-component">
    <div className="header-container">
      {/* <div className="header-icon-container">
          <MailIcon sx={{ color: "rgb(35, 28, 24)" }} />
        </div> */}
      <div className="header-logo">
        <Link to={"/"}>
          <img className='header-logo-image' src={logoSrc} alt="" />
        </Link>
      </div>
      {/* <div className="header-icon-container">
          <PhoneEnabledIcon sx={{ color: "rgb(35, 28, 24)" }} />
        </div> */}
    </div>
    // </div>
  );
};

export default Header;
