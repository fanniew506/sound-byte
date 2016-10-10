import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.showUsersTracks =  this.showUsersTracks.bind(this);
  }

  showUsersTracks() {
    const tracks = this.props.tracks;
    const tracksArr = [];
    for (let idx in tracks) { tracksArr.push(tracks[idx]); }
    debugger
    let trackList = tracksArr.map((track) => {
      return (
        <li key={track.id}>
          <h3 className="album-title">{track.title}</h3>
          <img className="album-cover" src={track.album_image_url}></img>
        </li>
      );
    });
    debugger
    return trackList;
  }

  render(){
    return (
      <div className='profile-view'>
        <header>
          <div className="header-background">
            <img className="user-profile-picture"></img>
          </div>
          <div className="default-profile-picture">
            <img src={this.props.currentUser.image_url} className="user-profile-picture"></img>
          </div>
        </header>
        <content className="profile-tracks-content">
          <h2 className="profile-tracks-header">Uploads</h2>
          <ul className="profile-tracks-list">
            {this.showUsersTracks()}
          </ul>
        </content>
      </div>
    );
  }
}
export default Profile;
