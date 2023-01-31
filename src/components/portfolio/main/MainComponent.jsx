import React from 'react';
import MainImage from './MainImage';

const MainComponent = () => {

  return(
    <div className="main-component">
      <div className="main-content">
        <div className="main">
          <div className="text">
            <h1>LEE JI YUN PORTFOLIO.</h1>
            <p>UI/UX 디자이너 & 웹 퍼블리셔에서 <h2>웹 개발자</h2> 길로 고요히 걸어가다.</p>
          </div>
          <div className="scroll"></div>

          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;