import React from 'react';
import { FcAutomotive, FcDiploma1, FcDiploma2, FcDataSheet, FcDocument } from "react-icons/fc";

const Certificate = () => {

  return(
    <div className="certificate">
      <div className="content-header sub">
        <h3 className="title">CERTIFICATE</h3>
      </div>
      <div className="content-body">
        <ul className="card-item">
          <li className="item">
            <FcAutomotive className="icon" />
            <div className="inf">
              <span>2종 보통 운전면허</span>
              <span>2022.08</span>
              <span>취득</span>
            </div>
          </li>
          <li className="item">
            <FcDiploma1 className="icon" />
            <div className="inf">
              <span>웹 디자인기능사</span>
              <span>2021.09</span>
              <span>취득</span>
            </div>
          </li>
          <li className="item">
            <FcDiploma2 className="icon" />
            <div className="inf">
              <span>그래픽기술자격(GTQ) 1급</span>
              <span>2014.08</span>
              <span>취득</span>
            </div>
          </li>
          <li className="item">
            <FcDataSheet className="icon" />
            <div className="inf">
              <span>컴퓨터활용능력2급</span>
              <span>2013.12</span>
              <span>취득</span>
            </div>
            </li>
          <li className="item">
            <FcDocument className="icon" />
            <div className="inf">
              <span>정보기술자격(ITQ) 아래한글 A등급</span>
              <span>2012.06</span>
              <span>취득</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Certificate;