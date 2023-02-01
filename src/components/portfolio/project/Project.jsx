import React, { useState } from 'react';
import ProjectDetailModal from './modal/ProjectDetailModal';

const Project = () => {
  const [projectDetail, setProjectDetail] = useState(false);

  const showModal = () => projectDetail(true);
  const hideModal = () => projectDetail(false);

  const projectData = [
    {
      id: 0,
      title : "부산광역시 권역별 건강정보통계 분석 시스템",
      img : "이미지",
      detail: <ProjectDetailModal />
    },
    {
      id: 1,
      title : "선박 원격 통합 모니터링 시스템",
      img : "이미지",
      detail: <ProjectDetailModal />
    },
    {
      id: 2,
      title : "센트랄 프로세스 마이닝 시스템",
      img : "이미지",
      detail: <ProjectDetailModal />
    },
    {
      id: 3,
      title : "지능형 IoT 항만 터미널 시스템",
      img : "이미지",
      detail: <ProjectDetailModal />
    },
    {
      id: 4,
      title : "IOChord Process Re-Engineering (IPR)",
      img : "이미지",
      detail: <ProjectDetailModal />
    }
  ]

  return(
    <div className='tab-content'>
      <ul className="project-item">
        {
          projectData.map(p => 
            <li key={p.id} className="item">
              <div className="item-img">{p.img}</div>
              <div className="item-inf">
                <p>{p.title}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Project;