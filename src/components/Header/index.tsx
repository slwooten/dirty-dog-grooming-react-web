import React from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';

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
          <img className='header-logo-image' src={logoSrc} alt="" />
        </div>
        {/* <div className="header-icon-container">
          <PhoneEnabledIcon sx={{ color: "rgb(35, 28, 24)" }} />
        </div> */}
      </div>
    // </div>
  );
};

export default Header;
