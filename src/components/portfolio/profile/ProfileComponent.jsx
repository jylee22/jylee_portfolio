import React from 'react';
import Certificate from './Certificate';
import Profile from './Profile';
import Skills from './Skills';

const ProfileComponent = () => {

  return(
    <div className="profile-component">
      <div className="profile-content">
        <div className="content-header">
          <h2 className="title">PROFILE</h2>
        </div>

        <div className="content-body">
          {/* 프로필 */}
          <Profile />
          {/* 프로필 */}
  
          {/* 자격증 */}
          <Certificate />
          {/* 자격증 */}
  
          {/* 스킬 */}
          <Skills />
          {/* 스킬 */}
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;