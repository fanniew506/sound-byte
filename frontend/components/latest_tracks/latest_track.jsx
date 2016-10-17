import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackPlayerControlsContainer from '../track_view/track_player_controls_container';

export default class LatestTracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.tracks) {
      const tracks = this.props.tracks;
      const tracksArr = [];
      for (let idx in tracks) { tracksArr.push(tracks[idx]); }
      const trackDivs = tracksArr.reverse().map((track) => {
        return(
          <li className="user-tracks group" key={ track.id }>
            <Link to={`/track-view/${track.id}`}>
              <img className="album-cover" src={ track.album_image_url }></img>
              <h3 className="user-profile-track-title">{ track.title }</h3>
            </Link>
            <TrackPlayerControlsContainer currentTrackView={track}/>
          </li>
        );
      });
      return (
        <content className="profile-tracks-content">
          <h2 className="profile-tracks-header">Latest Uploads</h2>
          <ul className="profile-tracks-list group">
            {trackDivs}
          </ul>
        </content>
      );
    } else {
      return <div></div>;
    }
  }
}
