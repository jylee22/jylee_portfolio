import React, { useState } from 'react';
// component
import ProjectAcademy from './ProjectAcademy';
import ProjectCompany from './ProjectCompany';
import ProjectMy from './ProjectMy';

const ProjectComponent = ({showModal, ProjectData, company, academy, my}) => {

  const [tab, setTab] = useState(0);

  const tabMenu = [
    {
      id: 0,
      title: "회사",
      list : <ProjectCompany tab={tab} ProjectData={ProjectData} company={company} showModal={showModal} />
    },
    {
      id: 1,
      title: "아카데미",
      list : <ProjectAcademy tab={tab} academy={academy} showModal={showModal} />
    },
    {
      id: 2,
      title: "개인",
      list : <ProjectMy tab={tab} my={my} showModal={showModal} />
    }
  ]

  const kItems = Object.keys(ProjectData);
  const vItems = Object.values(ProjectData);

  // key
  const kList = [];
  for(const item in kItems){
    const key = kItems[item];
    kList.push(key);
  }

  // value
  const vList = [];
  for(const item in vItems){
    const value = vItems[item];
    vList.push(value);
    // console.log(item);
  }
  const test = vList[0].map(v => 
    <div key={v.index}>
    {v.index}, {v.title}, {v.team}
    </div>
  );
  // console.log(vList[1].map(v => <div key={v.index}>{v.id}</div>));

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
    </div>
  );
}

export default ProjectComponent;