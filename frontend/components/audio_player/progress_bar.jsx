import React from 'react';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let position = Math.floor(((e.pageX - e.currentTarget.offsetLeft)/600)*this.props.duration);
    if (position > this.props.duration) {
      position = this.props.duration;
    }
    this.props.updatePosition(position);
    if (this.props.playStatus === "PAUSED" || this.props.playStatus === "STOPPED") {
      this.props.onPlay();
    }
  }

  displayPosition() {
    let seconds = Math.floor((this.props.position/1000)%60);
    let minutes = Math.floor(this.props.position/1000/60);
    seconds = this.paddedNumber(seconds);
    minutes = this.paddedNumber(minutes);
    return <div className="progress-position">{minutes}:{seconds}</div>;
  }

  paddedNumber(num) {
    let stringified = num.toString();
    if (stringified.length === 1) {
      return "0" + stringified;
    } else {
      return stringified;
    }
  }

  displayDuration() {
    let seconds = Math.floor((this.props.duration/1000)%60);
    let minutes = Math.floor(this.props.duration/1000/60);
    seconds = this.paddedNumber(seconds);
    minutes = this.paddedNumber(minutes);
    return <div className="progress-duration">{minutes}:{seconds}</div>;
  }

  render(){
    let position = this.props.position;
    let duration = this.props.duration;

    return (
      <div className="progress-container">
        {this.displayPosition()}
        <div className="progress-click" onClick={ this.handleClick }>
          <div className='progress-bar'>
            <div className='audio-progress'
                 style={{width: `${600*(position/duration)}px`}}>
            </div>
            <div className='progress-circle'
                 style={{left: `${600*(position/duration)}px`}}>
            </div>
          </div>
        </div>
        {this.displayDuration()}
      </div>
    );
  }
}


export default ProgressBar;
