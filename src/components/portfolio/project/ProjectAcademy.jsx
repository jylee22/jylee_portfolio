import React from 'react';

const ProjectAcademy = ({academy, showModal}) => {

  return(
    <div className='tab-content'>
      <div className="project-item">
      {
          academy.map(p => 
            <li 
              key={p.index} 
              className="item"
              onClick={showModal}
            >
              <div className="item-img">{p.img}</div>
              <div className="item-inf">
                <p>{p.title}</p>
              </div>
            </li>
          )
        }
      </div>
    </div>
  );
}

export default ProjectAcademy;