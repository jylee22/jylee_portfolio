import React from 'react';
import { FcBusinesswoman, FcCalendar, FcSms, FcGlobe } from "react-icons/fc";

const Profile = () => {

  return(
    <div className="profile">
      <div className="content-body">
        <div className="profile-item">
          <div className="item">
            <FcBusinesswoman className="icon" />
            <div className="inf">
              <small>이름</small>
              <p>이지윤  |  Lee Ji Yun</p>
            </div>
          </div>

          <div className="item">
            <FcCalendar className="icon" />
            <div className="inf">
              <small>생년월일</small>
              <p>1996.04.08</p>
            </div>
          </div>

          <div className="item">
            <FcSms className="icon" />
            <div className="inf">
              <small>이메일</small>
              <p>jylee22.96@gmail.com</p>
            </div>
          </div>

          <div className="item">
            <FcGlobe className="icon" />
            <div className="inf">
              <small>주소</small>
              <p>부산 해운대구 (타지역 근무 가능)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-footer">
        <h3>해시태크</h3>
        <div className="inf">
          <label># UI/UX디자이너</label>
          <label># 웹퍼블리셔</label>
          <label># 4년현직실무경험</label>
          <label># Web개발자</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;