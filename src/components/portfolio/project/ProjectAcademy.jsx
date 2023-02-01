import React from 'react';

const ProjectAcademy = () => {

  const projectData = [
    {
      id: 0,
      title : "냉장고 요정 미미 : 메뉴 추천 및 레시피",
      img : "이미지"
    },
    {
      id: 1,
      title : "이북 저북 : 전자 도서 사이트",
      img : "이미지"
    }
  ]

  return(
    <div className='tab-content'>
      <div className="project-item">
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
      </div>
    </div>
  );
}

export default ProjectAcademy;