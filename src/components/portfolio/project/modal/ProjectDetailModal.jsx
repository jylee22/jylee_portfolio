import React from 'react';
import { IoClose } from "react-icons/io5";

const ProjectDetailModal = ({hideModal, ProjectData, company, academy, my}) => {
  const data = ProjectData.company.map(c => 
    <li key={c.id}>
      <small>{c.subTitle}</small>
      <p>{c.title}</p>
    </li>

  );

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
              {/* {company.img} */}
            </div>

            <ul className="item-inf">
              {data}
            </ul>
            

            {/* <ul className="item-inf">
              <li>
                <small>프로젝트 명</small>
                <p></p>
              </li>
              <li>
                <small></small>
                <p>{c.team}</p>
              </li>
              <li>
                <small>{c.kindTitle}</small>
                <p>{c.kind}</p>
              </li>
              <li>
                <small>{c.daysTitle}</small>
                <p>{c.days}</p>
              </li>
              <li>
                <small>{c.positionTitle}</small>
                <p>{c.position}</p>
              </li>
            </ul> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
