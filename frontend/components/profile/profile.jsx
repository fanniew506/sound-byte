import React from 'react';

const Profile = ({store}) => {
  return (
    <div className='profile-view'>
      <header>
        <div className="header-background">
          <img className="user-profile-picture"></img>
        </div>
        <div className="default-profile-picture">
          <img className="user-profile-picture"></img>
        </div>
      </header>
    </div>
  );
};

export default Profile;
