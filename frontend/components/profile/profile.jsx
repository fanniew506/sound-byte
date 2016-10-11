import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.showUsersTracks =  this.showUsersTracks.bind(this);
    this.updateCurrentTrackView =  this.updateCurrentTrackView.bind(this);
    this.playCurrentTrack =  this.playCurrentTrack.bind(this);
  }

  updateCurrentTrackView(track){
    this.props.currentTrackView(track)
    hashHistory.push('/track-view')
  }

  playCurrentTrack(track){
    debugger
    this.props.selectSong(track)
  }


  showUsersTracks() {
    this.props.fetchAllTracksForUser();
    const tracks = this.props.tracks;
    const tracksArr = [];
    for (let idx in tracks) { tracksArr.push(tracks[idx]); }
    let trackList = tracksArr.map((track) => {
      return (
        <li key={ track.id }>
          <h3 onClick={ this.updateCurrentTrackView.bind(this, track) }>{ track.title }</h3>
          <img onClick={ this.playCurrentTrack.bind(this, track) } className="album-cover" src={ track.album_image_url }></img>
        </li>
      );
    });
    return trackList;
  }

  render(){
    return (
      <div className='profile-view'>
        <header>
          <div className="header-background">
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
