import React from 'react';
import { IoClose } from "react-icons/io5";

const ProjectDetailModal = ({hideModal, company, academy, my}) => {
  
  return(
    <div className="modal" id="projectDetail">
      <div className="modal-content">
        <div className="modal-header">
          <div className="btn-close" onClick={hideModal}>
            <IoClose className="icon" />
          </div>
        </div>
        <div className="modal-body">
          <div className="project-item">
            <div className="item-img">
              {company.img}
            </div>
            <ul className="item-inf">
              <li>
                <small>{company.subtitle}</small>
                <p>{company.title}</p>
              </li>
              <li>
                <small>{company.teamTitle}</small>
                <p>{company.team}</p>
              </li>
              <li>
                <small>{company.kindTitle}</small>
                <p>{company.kind}</p>
              </li>
              <li>
                <small>{company.daysTitle}</small>
                <p>{company.days}</p>
              </li>
              <li>
                <small>{company.positionTitle}</small>
                <p>{company.position}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
