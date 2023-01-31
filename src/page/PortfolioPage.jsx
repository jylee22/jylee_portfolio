import React from 'react';
// component
import Header from '../components/common/Header';
import PortfolioLayout from '../components/layout/PortfolioLayout';

const PortfolioPage = () => {

  return(
    <main className="page">
      <Header />
      <PortfolioLayout />
    </main>
  );
}

export default PortfolioPage;