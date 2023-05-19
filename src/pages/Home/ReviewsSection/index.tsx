import React from 'react';

import './reviews.css';

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h1>What Our Happy Clients Say</h1>
      </div>
      <div className="review-cards-container">
        <div className="review-card">
          <p>Here is what the client had to say about their experience...</p>
          <h2>Client Name</h2>
        </div>
        <div className="review-card">
          <p>Here is what the client had to say about their experience...</p>
          <h2>Client Name</h2>
        </div>
        <div className="review-card">
          <p>Here is what the client had to say about their experience...</p>
          <h2>Client Name</h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
