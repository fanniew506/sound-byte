import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='profile-view'>
        <header>
          <div className="header-background">
            <img className="user-profile-picture"></img>
          </div>
          <div className="default-profile-picture">
            <img src={currentUser.image_url} className="user-profile-picture"></img>
          </div>
        </header>
      </div>
    );
  }
}
export default Profile;
