import React from 'react';
import ProjectAcademy from './ProjectAcademy';
import ProjectCompany from './ProjectCompany';

const ProjectComponent = () => {
  
  return(
    <div className="project-component">
      <div className="project-content">
        <div className="content-header">
          <h1 className="title">PROJECT</h1>
        </div>
        <div className="content-body">
          <div className="project">
            <ul className="tab-menu white">
              <li className="item active">회사</li>
              <li className="item">직업훈련</li>
              <li className="item">개인</li>
            </ul>
            
            {/* company */}
            <ProjectCompany />
            {/* company */}

            {/* academy */}
            <ProjectAcademy />
            {/* academy */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;