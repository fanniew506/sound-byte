import React from 'react';
import Sound from 'react-sound';
import PlayerControls from './player_controls';
import ProgressBar from './progress_bar';
import { Link } from 'react-router';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0, duration: null};
    this.playAudio = this.playAudio.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  playAudio(playInfo){
    this.setState({position: playInfo.position});
    this.setState({duration: playInfo.duration});
  }

  updatePosition(number){
    this.setState({position: number});
  }

  render() {
    if (this.props.currentSong) {
      return (
          <div className="audio-player group">
              <div className="control-holder">
              <PlayerControls
                className="player-controls"
                playStatus={ this.props.playStatus }
                onPlay={ this.props.onPlay }
                onPause={ this.props.onPause }
                onResume={ this.props.onResume }
                onStop={ this.props.onStop }
                onSeek={ this.props.onSeek }
                duration={ this.props.currentSong ? this.state.duration : 0 }
                position={ this.state.position }/>
              <ProgressBar
                position={ this.state.position }
                duration={ this.props.currentSong ? this.state.duration : 0 }
                updatePosition={ this.updatePosition }
              />
              { this.props.currentSong.audio_url &&
                <Sound
                  url={this.props.currentSong.audio_url}
                  playStatus={this.props.playStatus}
                  volume={ this.props.volume }
                  onFinishedPlaying={this.props.onFinishedPlaying}
                  onPlaying={ this.playAudio }/>
              }
              <div className="player-album-info">
                <Link to={`/track-view/${this.props.currentSong.id}`}>
                  <img src={this.props.currentSong.album_image_url}></img>
                  <div className="audio-player-album-name">
                    <h2 className="audio-title">{this.props.currentSong.title}</h2>
                    <br/>
                    <h4 className="audio-name">{this.props.currentSong.author_name}</h4>
                  </div>
                </Link>
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
