import React, { useState } from 'react';

const ProjectCompany = ({company, showModal}) => {
  return(
    <div className='tab-content'>
      <ul className="project-item">
        {
          company.map(p => 
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
      </ul>
    </div>
  );
}

export default ProjectCompany;