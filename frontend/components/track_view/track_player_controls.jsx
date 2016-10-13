import React from 'react';
import Sound from 'react-sound';

function control(text, clickHandler) {
  const onClick = (e) => {
    e.preventDefault();
    clickHandler();
  };
  let button;
    if (text === 'Play' || text === 'Resume') {
      return <li><i onClick={onClick} className="fa track-play" aria-hidden="true"></i></li>;
    } else {
      return <li><i onClick={onClick} className="fa track-pause" aria-hidden="true"></i></li>;
    }
  }

export default class TrackPlayerControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {this.renderControls()}
    </div>;
  }


  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };

  if (this.props.currentSong){
    if( this.props.currentTrackView.id === this.props.currentSong.id ) {
      return (
        <ul>
          {controls.play && control('Play', this.props.onPlay)}
          {controls.pause && control('Pause', this.props.onPause)}
          {controls.resume && control('Resume', this.props.onResume)}
        </ul>
      );
    }} else {
      return (
        <ul>
          {controls.play && control('Play', this.props.selectSong)}
        </ul>
      );
    }}
}
