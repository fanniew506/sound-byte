import React from 'react';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
          <div className='audio-progress'
               style={{width: `${100*(position/duration)}px`}}>
          </div>
          <div className='progress-circle'
               style={{left: `${document.documentElement.clientWidth*(position/duration) - 8}px`}}>
          </div>
        </div>

      </div>
    );
  }
}


export default ProgressBar;
