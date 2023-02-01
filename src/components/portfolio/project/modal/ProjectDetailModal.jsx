import React from 'react';
import { IoClose } from "react-icons/io5";

const ProjectDetailModal = ({hideModal, projectData}) => {
  
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
              이미지
            </div>
            <ul className="item-inf">
              <li>
                <small>프로젝트 명</small>
                <p>부산광역시 권역별 건강정보통계 분석 시스템</p>
              </li>
              <li>
                <small>연계/소속 회사</small>
                <p>(주)아이오코드</p>
              </li>
              <li>
                <small>분류</small>
                <p>프로젝트</p>
              </li>
              <li>
                <small>수행 기간</small>
                <p>2018.08 ~ 2018.12 (약 5개월 소요)</p>
              </li>
              <li>
                <small>주요 역할</small>
                <p>UI/UX 디자인 및 퍼블리싱</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="project-item">
        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>부산광역시 권역별 건강정보통계 분석 시스템</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>(주)아이오코드</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2018.08 ~ 2018.12 (약 5개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>UI/UX 디자인 및 퍼블리싱</p>
            </li>
          </ul>
        </div>

        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>선박 원격 통합 모니터링 시스템</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>(주)아이오코드</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2019.03 ~ 2019.05 (약 3개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>UI/UX 디자인, 그래픽 및 아이콘 제작</p>
            </li>
          </ul>
        </div>

        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>센트랄 프로세스 마이닝 시스템</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>(주)아이오코드</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2020.01 ~ 2021.02 (약 12개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>UI/UX 디자인 및 퍼블리싱, 아이콘 제작</p>
            </li>
          </ul>
        </div>

        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>지능형 IoT 항만 터미널 시스템</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>(주)아이오코드</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2021.02 ~ 2021.07 (약 6개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>웹 퍼블리싱, 아이콘 제작</p>
            </li>
          </ul>
        </div>
        
        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
          <li>
              <small>프로젝트 명</small>
              <p>IOChord Process Re-Engineering (IPR)</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>(주)아이오코드</p>
            </li>
            <li>
              <small>분류</small>
              <p>제품 개발</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2019 ~ 2022 (진행중)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>UI/UX 디자인, 웹 퍼블리싱, 아이콘 제작</p>
            </li>
          </ul>
        </div>
      </div> 
      
      <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>냉장고 요정 미미 : 메뉴 추천 및 레시피</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>자바 파이썬을 활용한 머신러닝 SW개발자 과정</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2022.12 ~ 2023.01 (약 2개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>기획 / 디자인 / 프론트</p>
            </li>
          </ul>
        </div>

        <div className="item">
          <div className="item-img">
            이미지
          </div>
          <ul className="item-inf">
            <li>
              <small>프로젝트 명</small>
              <p>이북 저북 : 전자 도서 사이트</p>
            </li>
            <li>
              <small>연계/소속 회사</small>
              <p>자바 파이썬을 활용한 머신러닝 SW개발자 과정</p>
            </li>
            <li>
              <small>분류</small>
              <p>프로젝트</p>
            </li>
            <li>
              <small>수행 기간</small>
              <p>2022.10 ~ 2022.11 (약 1개월 소요)</p>
            </li>
            <li>
              <small>주요 역할</small>
              <p>기획 / 디자인 / 프론트 / 백엔드</p>
            </li>
          </ul>
        </div>

      */}
    </div>
  );
}

export default ProjectDetailModal;
