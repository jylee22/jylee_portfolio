import React from 'react';
import ContentComponent from '../portfolio/contact/ContactComponent';
import HistoryComponent from '../portfolio/history/HistoryComponent';
import PortfolioComponent from '../portfolio/PortfolioComponent';
import ProjectComponent from '../portfolio/project/ProjectComponent';

const PortfolioLayout = () => {

  return(
    <main className="components">
      <div class="contents">

        <PortfolioComponent />

        <HistoryComponent />

        <ProjectComponent />

        <ContentComponent />
      </div>
    </main>
  );
}

export default PortfolioLayout;