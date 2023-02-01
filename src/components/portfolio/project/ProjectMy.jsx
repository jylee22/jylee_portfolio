import React, { useState } from 'react';

const ProjectMy = ({my, showModal}) => {

  return(
    <div className='tab-content'>
      <ul className="project-item">
        {
          my.map(p => 
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

export default ProjectMy;