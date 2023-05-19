import React from 'react';

import { Link } from 'react-router-dom';

import './pampered.css';

// images
import pampPic1 from '../../../images/pamp-pic1.jpeg'
import pampPic2 from '../../../images/pamp-pic2.jpeg'
import pampPic3 from '../../../images/pamp-pic3.jpeg'

const PamperedSection = () => {
  return (
    <div className="pampered-section">
      <div className="pampered-header">
        <h1>Your pet deserves to be pampered!</h1>
      </div>
      <div className="service-items-pampered">
        <p>Bath or Shower 🧼</p>
        <p>Full Groom ✂️</p>
        <p>Tidy Trim 🪮</p>
      </div>
      <div className="book-appointment-btn">
        <Link style={{ textDecoration: "none" }} to="/contact">
          <p>Book an Appointment</p>
        </Link>
      </div>
      <div className="pampered-imgs">
        <img src={pampPic1} alt="doggy 1" />
        <img src={pampPic2} alt="doggy 1" />
        <img src={pampPic3} alt="doggy 1" />
      </div>
    </div>
  );
};

export default PamperedSection;
