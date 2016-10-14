import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackPlayerControlsContainer from '../track_view/track_player_controls_container'

class OtherProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.showUsersTracks =  this.showUsersTracks.bind(this);
    this.playCurrentTrack =  this.playCurrentTrack.bind(this);
    debugger
  }

  playCurrentTrack(track){
    this.props.selectSong(track)
  }


  showUsersTracks() {
    const tracks = this.props.tracks;
    const tracksArr = [];
    for (let idx in tracks) { tracksArr.push(tracks[idx]); }
    debugger
    let trackList = tracksArr.map((track) => {
      return (
        <li className="user-tracks group" key={ track.id }>
          <Link to={`/track-view/${track.id}`}>
            <img className="album-cover" src={ track.album_image_url }></img>
            <h3 className="user-profile-track-title">{ track.title }</h3>
          </Link>
          <TrackPlayerControlsContainer currentTrackView={track}/>
        </li>
      );
    });
    return trackList;
  }

  render(){
    if (this.props.user) {
      return (
        <div className='profile-view group'>
          <header>
            <div className="header-background">
            </div>
            <div className="default-profile-picture">
              <img src={this.props.user.image_url} className="user-profile-picture"></img>
            </div>
            <div className="username-profile">
              <h4>{ this.props.user.username }</h4>
            </div>
          </header>
          <content className="profile-tracks-content">
            <h2 className="profile-tracks-header">Uploads</h2>
            <ul className="profile-tracks-list group">
              {this.showUsersTracks()}
            </ul>
          </content>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default OtherProfileView;
