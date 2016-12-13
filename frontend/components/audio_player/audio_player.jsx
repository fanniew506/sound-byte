import React from 'react';
import Sound from 'react-sound';
import PlayerControls from './player_controls';
import ProgressBar from './progress_bar';
import { Link } from 'react-router';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0, duration: 0};
    this.playAudio = this.playAudio.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  playAudio(playInfo){
    this.updatePosition(playInfo.position);
    this.setState({position: playInfo.position});
    this.setState({duration: playInfo.duration});
  }

  updatePosition(number){
    this.props.updatePosition(number);
    this.setState({position: this.props.position});
  }

  render() {
    if (this.props.currentSong) {
      return (
          <div className="audio-player">
              <div className="control-holder">
              <PlayerControls
                className="player-controls"
                playStatus={ this.props.playStatus }
                onPlay={ this.props.onPlay }
                onPause={ this.props.onPause }
                onResume={ this.props.onResume }
                onSeek={ this.props.onSeek }
                duration={ this.props.currentSong ? this.state.duration : 0 }
                position={ this.props.position }/>
              <ProgressBar
                position={ this.state.position }
                duration={ this.props.currentSong ? this.state.duration : 0 }
                updatePosition={ this.updatePosition }
                playStatus={this.props.playStatus}
                onPlay={ this.props.onPlay }
              />
              { this.props.currentSong.audio_url &&
                <Sound
                  url={this.props.currentSong.audio_url}
                  playStatus={this.props.playStatus}
                  volume={ this.props.volume }
                  playFromPosition = { this.props.playFromPosition }
                  onFinishedPlaying={this.props.onFinishedPlaying}
                  position={ this.props.position }
                  onPlaying={ this.playAudio }/>
              }
              <div className="player-album-info">
                <Link to={`/track-view/${this.props.currentSong.id}`}>
                  <img src={this.props.currentSong.album_image_url}></img>
                </Link>
                <div>
                  <Link to={`/track-view/${this.props.currentSong.id}`}>
                    <h2 className="audio-title">{this.props.currentSong.title}</h2>
                  </Link>
                  <Link to={`/profile/${this.props.currentSong.author_id}`}>
                    <h4 className="audio-name">{this.props.currentSong.author_name}</h4>
                  </Link>
                </div>
            </div>
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
