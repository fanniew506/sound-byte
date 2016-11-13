import React from 'react';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const position = Math.floor(((e.clientX-262)/600)*this.props.duration);
    this.props.updatePosition(position);
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
      <div className="progress-container group">
        <div className="progress-click" onClick={ this.handleClick }>
          {this.displayPosition()}
          <div className='progress-bar'>
            <div className='audio-progress'
                 style={{width: `${600*(position/duration)}px`}}>
            </div>
            <div className='progress-circle'
                 style={{left: `${600*(position/duration)}px`}}>
            </div>
          </div>
          {this.displayDuration()}
        </div>
      </div>
    );
  }
}


export default ProgressBar;
