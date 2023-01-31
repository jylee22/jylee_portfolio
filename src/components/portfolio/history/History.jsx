import React from 'react';

const History = () => {

  return(
    <div className="history">
      <ul className="history-item">
        <li className="title" >경력</li>
        <ul className="history-sub-item">
          <li className="item" >
            <p>2018.07 ~ 2022.06</p>
            <p>(주)아이오코드</p>
            <label>UI/UX 디자이너 및 퍼블리셔</label>
          </li>
        </ul>
      </ul>

      <ul className="history-item">
        <li className="title" >직업 훈련</li>
        <ul className="history-sub-item">
          <li className="item" >
            <p>2022.07 ~ 2023.02</p>
            <p>[산업구조변화대응 특화과정] 자바 파이썬을 활용한 머신러닝 SW개발자 과정</p>
            <label>수료</label>
          </li>
          <li className="item" >
            <p>2018.03 ~ 2018.07</p>
            <p>[지역산업맞춤형] 프론트엔드 웹 디자인 전문가과정</p>
            <label>수료</label>
          </li>
        </ul>
      </ul>

      <ul className="history-item">
        <li className="title">사회경험 및 대외활동</li>
        <ul className="history-sub-item">
          <li className="item" >
            <p>2017.09 ~ 2018.02</p>
            <p>경남정보대학</p>
            <label>근로장학생 - 교내 취업처</label>
          </li>
          <li className="item" >
            <p>2017.05 ~ 2017.06</p>
            <p>씨에스원</p>
            <label>콜센터 상담</label>
          </li>
          <li className="item" >
            <p>2017.03 ~ 2017.05</p>
            <p>해운대 약국</p>
            <label>약사 보조</label>
          </li>
          <li className="item" >
            <p>2012.12 ~ 2014.12</p>
            <p>해운대관광고등학교</p>
            <label>선도 및 학생회 활동</label>
          </li>
        </ul>
      </ul>

      <ul className="history-item">
        <li className="title" >학력</li>
        <ul className="history-sub-item">
          <li className="item" >
            <p>2017.03 ~ 2019.02</p>
            <p>경남정보대학 - 컴퓨터정보공학</p>
            <label>학사졸업</label>
          </li>
          <li className="item" >
            <p>2015.03 ~ 2017.02</p>
            <p>경남정보대학 - 컴퓨터정보전공</p>
            <label>전문학사 졸업</label>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default History;