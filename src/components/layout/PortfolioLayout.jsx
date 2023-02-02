import React, { useState } from 'react';
// data
import ProjectData from '../../assets/json/projectCompanyData.json';

// component
import ContentComponent from '../portfolio/contact/ContactComponent';
import HistoryComponent from '../portfolio/history/HistoryComponent';
import PortfolioComponent from '../portfolio/PortfolioComponent';
import ProjectComponent from '../portfolio/project/ProjectComponent';
import ProjectDetailModal from '../portfolio/project/modal/ProjectDetailModal';

const PortfolioLayout = () => {
  // modal
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);
  // project data
  const company = ProjectData.company;
  const academy = ProjectData.academy;
  const my = ProjectData.my;

  return(
    <>
    <main className="components">
      <div className="contents">

        <PortfolioComponent />

        <HistoryComponent />

        <ProjectComponent
          showModal={showModal}
          ProjectData={ProjectData}
          company={company}
          academy={academy}
          my={my}
        />

        <ContentComponent />
      </div>
    </main>
    
    {
      modal && 
      <ProjectDetailModal
        ProjectData={ProjectData}
        hideModal={hideModal}
      />
    }
    </>
  );
}

export default PortfolioLayout;