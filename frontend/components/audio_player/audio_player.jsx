import React from 'react';
import Sound from 'react-sound';
import PlayerControls from './player_controls';
import ProgressBar from './progress_bar';
import { Link } from 'react-router';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentSong) {
      return (
        <div className="audio-player group">
          <PlayerControls
            className="player-controls"
            playStatus={this.props.playStatus}
            onPlay={this.props.onPlay}
            onPause={this.props.onPause}
            onResume={this.props.onResume}
            onStop={this.props.onStop}
            onSeek={this.props.onSeek}
            onVolumeUp={ this.props.onVolumeUp.bind(this, this.props.volume) }
            onVolumeDown={ this.props.onVolumeDown.bind(this, this.props.volume) }
            duration={this.props.currentSong ? this.props.duration : 0}
            position={this.props.position} />
          <ProgressBar
            position={this.props.position}
            duration={this.props.currentSong ? this.props.duration : 0}
            updatePosition={this.props.updatePosition.bind(this)}
          />
          {this.props.currentSong.audio_url &&
            <Sound
              url={this.props.currentSong.audio_url}
              playStatus={this.props.playStatus}
              playFromPosition={this.props.position}
              volume={ this.props.volume }
              onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onFinishedPlaying={this.props.onFinishedPlaying} />}
          <div className="player-album-info">
            <Link to={`/track-view/${this.props.currentSong.id}`}>
              <img src={this.props.currentSong.album_image_url}></img>
              <h2>{this.props.currentSong.title}</h2>
              <h4>{this.props.currentSong.author_name}</h4>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
