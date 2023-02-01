import React, { useState } from 'react';
// data
import ProjectData from '../../../assets/json/projectCompanyData.json';
import ProjectDetailModal from './modal/ProjectDetailModal';
// component
import ProjectAcademy from './ProjectAcademy';
import ProjectCompany from './ProjectCompany';
import ProjectMy from './ProjectMy';


const ProjectComponent = () => {
  const company = ProjectData.company;
  const academy = ProjectData.academy;
  const my = ProjectData.my;

  const [tab, setTab] = useState(0);

  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  const tabMenu = [
    {
      id: 0,
      title: "회사",
      list : <ProjectCompany company={company} showModal={showModal} />
    },
    {
      id: 1,
      title: "아카데미",
      list : <ProjectAcademy academy={academy} showModal={showModal} />
    },
    {
      id: 2,
      title: "개인",
      list : <ProjectMy my={my} showModal={showModal} />
    }
  ]
  
  const [detail, setDetail] = useState(0);

  console.log();

  return(
    <div className="project-component">
      <div className="project-content">
        <div className="content-header">
          <h1 className="title">PROJECT</h1>
        </div>
        <div className="content-body">
          <div className="project">
            <ul className="tab-menu">
              {
                tabMenu.map(t => 
                  <li className={tab === t.id ? "item active" : "item"} 
                    key={t.id}
                    onClick={ ()=> setTab(t.id)}
                  >{t.title}</li>
                )
              }
            </ul>

            {
              tabMenu.filter(tc => tab === tc.id).map(t => 
                <div 
                  className="tab" 
                  key={t.id}
                >{t.list}</div>
              )
            }
          </div>
        </div>
      </div>

      {
        modal &&
        <ProjectDetailModal
          hideModal={hideModal}
          company={company}
          academy={academy}
          my={my}
        />
      }
      
    </div>
  );
}

export default ProjectComponent;