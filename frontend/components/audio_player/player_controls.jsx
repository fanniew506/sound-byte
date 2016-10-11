import React from 'react';
import Sound from 'react-sound';


export default class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.control = this.control.bind(this);
  }

  render() {
    return <div>
      {this.renderControls()}
    </div>;
  }

  control(text, clickHandler) {
    const onClick = (e) => {
      e.preventDefault();
      clickHandler();
    };
    return <li><a href="#" onClick={onClick}>{text}</a></li>;
    }

  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      stop: this.props.playStatus !== Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };

    return (
      <div>
        Volume:
        <button onClick={this.props.onVolumeDown}>-</button>
        <button onClick={this.props.onVolumeUp}>+</button>

        <ul>
          {controls.play && this.control('Play', this.props.onPlay)}
          {controls.stop && this.control('Stop', this.props.onStop)}
          {controls.pause && this.control('Pause', this.props.onPause)}
          {controls.resume && this.control('Resume', this.props.onResume)}
        </ul>
      </div>
    );
  }
}
