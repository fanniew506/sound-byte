import React from 'react';

function control(text, clickHandler) {
  const onClick = (e) => {
    e.preventDefault();
    clickHandler();
  };
    if (text === 'Play' || text === 'Resume') {
      return (<li><i onClick={onClick} className="fa fa-play-circle" aria-hidden="true"></i></li>);
    } else {
      return (<li><i onClick={onClick} className="fa fa-pause-circle" aria-hidden="true"></i></li>);
    }
  }

export default class TrackPlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.chooseSong = this.chooseSong.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
  }

  render() {
    return <div>
      {this.renderControls()}
    </div>;
  }

  chooseSong() {
      this.props.selectSong(this.props.currentTrackView);
      this.props.updatePosition(0);
      this.props.onPlay();
  }

  play() {
      this.props.onPlay();
  }

  pause() {
      this.props.onPause();
  }

  resume() {
      this.props.onResume();
  }

  renderControls() {
    const controls = {
      play: this.props.playStatus === "STOPPED",
      pause: this.props.playStatus === "PLAYING",
      resume: this.props.playStatus === "PAUSED"
    };

  if (this.props.currentSong){
    if( this.props.currentTrackView.id === this.props.currentSong.id ) {
      return (
        <ul className="track-play-toggle-controls">
          {controls.play && control('Play', this.play)}
          {controls.pause && control('Pause', this.pause)}
          {controls.resume && control('Resume', this.resume)}
        </ul>
      );
    } else {
      return (
        <ul className="track-play-toggle-controls">
          <li>
            <i onClick={ this.chooseSong } className="fa fa-play-circle" aria-hidden="true"></i>
          </li>
        </ul>
      );
    }} else {
      return (
        <ul className="track-play-toggle-controls">
          <li>
            <i onClick={ this.chooseSong } className="fa fa-play-circle" aria-hidden="true"></i>
          </li>
        </ul>
      );
    }}
}
