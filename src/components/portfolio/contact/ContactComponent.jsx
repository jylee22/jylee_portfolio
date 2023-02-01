import React from 'react';

const ContentComponent = () => {
  
  return(
    <div className="contact-component">
      <div className="contact-content">
        <div className="contact">
          <div className="content-header">
            <h1 className="title">FINALLY</h1>
          </div>
          <div className="content-body">
            <p>부족한 저의 포트폴리오를 봐주셔서 감사합니다. <br/>저에대해 궁금한 점이 있으시다면 메일 부탁드립니다.</p>
            <div className="item">
              <span>
                <small>이름</small>
                <p>이지윤</p>
              </span>
              <span>
                <small>이메일</small>
                <p>jylee22.96@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>포트폴리오 사이트 입니다.</p>
        <small>© 2022. Lee Ji Yun. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default ContentComponent;