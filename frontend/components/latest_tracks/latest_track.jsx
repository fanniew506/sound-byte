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
          <li className="user-tracks" key={ track.id }>
            <Link to={`/track-view/${track.id}`}>
              <img className="album-cover" src={ track.album_image_url }></img>
            </Link>
            <span>
              <TrackPlayerControlsContainer currentTrackView={track}/>
              <Link to={`/track-view/${track.id}`}>
                <h2 className="index-author-name">{ track.author_name }</h2>
                <h3 className="index-track-title">{ track.title }</h3>
              </Link>
            </span>
          </li>
        );
      });
      return (
        <content className="tracks-index-container">
          <h2 className="tracks-index-header">Latest Uploads</h2>
          <ul className="tracks-index-list">
            {trackDivs}
          </ul>
        </content>
      );
    } else {
      return <div></div>;
    }
  }
}
