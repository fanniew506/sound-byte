import React from 'react';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.displayPosition = this.displayPosition.bind(this);
    this.displayDuration = this.displayDuration.bind(this);
  }

  handleClick(e){
    const end = document.documentElement.clientWidth;
    const position = Math.floor(this.props.duration*(e.clientX)/end);
    this.props.updatePosition(position);
  }

  render(){
    let position = this.props.position;
    let duration = this.props.duration;

    return (
      <div>
        <div className='progress-bar' onClick={ this.handleClick }>
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
