import React, { useState } from 'react';
import ProjectDetailModal from './modal/ProjectDetailModal';
import Project from './Project';
import ProjectAcademy from './ProjectAcademy';
import ProjectCompany from './ProjectCompany';

const ProjectComponent = () => {
  const [tab, setTab] = useState(0);

  const [detail, setDetail] = useState(false);
  const showModal = () => setDetail(true);
  const hideModal = () => setDetail(false);

  const tabMenu = [
    {
      id: 0,
      title: "회사",
      list : <ProjectCompany showModal={showModal}/>
    },
    {
      id: 1,
      title: "직업 훈련",
      list : <ProjectAcademy />
    },
    {
      id: 2,
      title: "개인",
      list : <Project />
    }
  ]

  const projectData = [
    {
      id: 0,
      title : "부산광역시 권역별 건강정보통계 분석 시스템",
      img : "이미지"
    },
    {
      id: 1,
      title : "선박 원격 통합 모니터링 시스템",
      img : "이미지"
    },
    {
      id: 2,
      title : "센트랄 프로세스 마이닝 시스템",
      img : "이미지"
    },
    {
      id: 3,
      title : "지능형 IoT 항만 터미널 시스템",
      img : "이미지"
    },
    {
      id: 4,
      title : "IOChord Process Re-Engineering (IPR)",
      img : "이미지"
    }
  ]

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
            
            {/* content */}
            {
              tabMenu.filter(tc => tab === tc.id).map(t => 
                <div 
                  className="tab" 
                  key={t.id}
                >{t.list}</div>
              )
            }
            {/* content */}
          </div>
        </div>
      </div>

      {
        detail && 
        <ProjectDetailModal
          hideModal={hideModal}
          projectData={projectData}
        />
      }
      
    </div>
  );
}

export default ProjectComponent;