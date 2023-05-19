import React from 'react';

// components
import HeroSection from './HeroSection';
import PamperedSection from './PamperdSection';
import ReviewsSection from './ReviewsSection';

const Home = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <PamperedSection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
