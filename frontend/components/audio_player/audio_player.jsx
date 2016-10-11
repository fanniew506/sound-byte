import React from 'react';
import Sound from 'react-sound';
import PlayerControls from './player_controls';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentSong) {
      return (
        <div className="audio-player">
          <PlayerControls
            playStatus={this.props.playStatus}
            onPlay={this.props.onPlay}
            onPause={this.props.onPause}
            onResume={this.props.onResume}
            onStop={this.props.onStop}
            onSeek={this.props.onSeek}
            onVolumeUp={this.props.onVolumeUp}
            onVolumeDown={this.props.onVolumeDown}
            duration={this.props.currentSong ? this.props.duration : 0}
            position={this.props.position} />
          {this.props.currentSong.audio_url &&
            <Sound
              url={this.props.currentSong.audio_url}
              playStatus={this.props.playStatus}
              playFromPosition={this.props.position}
              volume={this.props.volume}
              onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onFinishedPlaying={this.props.onFinishedPlaying} />}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
