import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, formType: ""};
    this.handleLogOut = this.handleLogOut.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openLoginModal() {
    this.setState({modalIsOpen: true, formType: "login"});
   }

  openSignupModal() {
    this.setState({modalIsOpen: true, formType: "signup"});
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  handleLogOut() {
    this.props.logout(()=>hashHistory.push('/'));
  }
  render() {
    Modal.setAppElement('body');
    const currentUser = this.props.currentUser;
    if (currentUser === null){
      return(
        <div>
          <nav className='header-nav loggedout'>
            <button onClick={this.openLoginModal}><h4>Log In</h4></button>
            <button onClick={this.openSignupModal}><h4>Create Account</h4></button>
          </nav>
          <Modal isOpen={this.state.modalIsOpen}>
            <SessionFormContainer formType={this.state.formType}/>
            <button onClick={this.closeModal}><h4>X</h4></button>
          </Modal>
        </div>
        );
      } else {
      return (
        <div>
          <nav className='header-nav loggedin'>
            <Link to='/new-track-form'><h4>Upload</h4></Link>
            <Link to='/profile'><h4>{currentUser.username}</h4></Link>
            <button onClick={this.handleLogOut}><h4>Log out</h4></button>
          </nav>
        </div>
      );
    }
  }
}

export default Navigation;
