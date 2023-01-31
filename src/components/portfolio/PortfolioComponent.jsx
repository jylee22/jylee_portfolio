import React from 'react';
// component
import MainComponent from './main/MainComponent';
import ProfileComponent from './profile/ProfileComponent';

const PortfolioComponent = () => {

  return(
    <div className="portfolio-component">
      <div className="portfolio-content">
        <MainComponent />

        <ProfileComponent />
      </div>
    </div>
  );
}

export default PortfolioComponent;