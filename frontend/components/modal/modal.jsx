import React from 'react';
import {hashHistory} from 'react-router';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e) {
    this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
  }

  modalStyle() {
    return { width: this.state.windowWidth, height: this.state.windowHeight };
  }

  handleModalClick() {
    hashHistory.push("/");
  }

  render () {
    debugger
    return (
      <div onClick={this.handleModalClick} className="session-modal" style={ this.modalStyle() }></div>
    )
  }

}

export default Modal;
