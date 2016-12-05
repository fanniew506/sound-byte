import React from 'react';
import Sound from 'react-sound';

function control(text, clickHandler) {
  const onClick = (e) => {
    e.preventDefault();
    clickHandler();
  };
  let button;
    if (text === 'Play' || text === 'Resume') {
      return <li><i onClick={onClick} className="fa fa-play fa-lg" aria-hidden="true"></i></li>;
    } else if (text === 'Pause') {
      return <li><i onClick={onClick} className="fa fa-pause fa-lg" aria-hidden="true"></i></li>;
    }
  }

export default class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // <li><i className="fa fa-step-backward" aria-hidden="true"></i></li>
    // <i className="fa fa-step-forward" aria-hidden="true"></i>
    return (
      <ul className="player-controls">
        {this.renderControls()}
      </ul>
    );
  }


  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };


    return (
      <ul>
        {controls.play && control('Play', this.props.onPlay)}
        {controls.pause && control('Pause', this.props.onPause)}
        {controls.resume && control('Resume', this.props.onResume)}
      </ul>
    );
  }
}
