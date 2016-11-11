import React from 'react';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.displayPosition = this.displayPosition.bind(this);
    // this.displayDuration = this.displayDuration.bind(this);
  }

  handleClick(e){
    const position = Math.floor(((e.clientX-262)/600)*this.props.duration);
    debugger
    this.props.updatePosition(position);
    debugger
  }

  render(){
    let position = this.props.position;
    let duration = this.props.duration;

    return (
      <div className="progress-container" onClick={ this.handleClick }>
        <div className='progress-bar'>
          <div>{this.displayPosition}</div>
          <div className='audio-progress'
               style={{width: `${600*(position/duration)}px`}}>
          </div>
          <div className='progress-circle'
               style={{left: `${600*(position/duration)}px`}}>
          </div>
          <div>{this.displayDuration}</div>
        </div>

      </div>
    );
  }
}


export default ProgressBar;
