import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDom from 'react-dom';
import SessionFormContainer from '../session/session_form_container';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, formType: ""};
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logout();
    hashHistory.push('/');
  }

  componentDidMount() {
    if (this.props.currentUser) {
      hashHistory.push('/home');
    }
  }


  render() {
    const currentUser = this.props.currentUser;
    if (currentUser === null){
      return(
        <div>
          <span className="header-container logged-out">
            <header className="header logged-out">
              <div className='header-logo'>
                <Link to='/'>
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                </Link>
                <Link to='/'>
                  <h3 className="logged-out-logo this-one">SOUNDBYTE</h3>
                </Link>
              </div>
              <nav className='header-nav loggedout'>
                <Link to="/login"><h3 className="login this">Log In</h3></Link>
                <h3 className="loggedout or">OR</h3>
                <Link to="/signup"><h3 className="createaccount this">Create Account</h3></Link>
              </nav>
            </header>
          </span>
          <div className="background-picture"></div>
        </div>
        );

      } else {
      return (
      <div>
        <div className="header-container logged-in">
          <header className="header">
            <div className='header-logo loggedin'>
              <Link to='/home'>
                <i className="fa fa-cloud loggedin" aria-hidden="true"></i>
              </Link>
              <Link to='/home'>
                <span className="logged-in-logo"><h1>HOME</h1></span>
              </Link>
            </div>
            <nav className='header-nav loggedin'>
              <Link className="logged-in-nav" to='/new-track-form'><h3>Upload</h3></Link>
              <Link className="logged-in-nav" to={`/profile/${currentUser.id}`}>
                <h3 className="username">
                  <img className="profile-thumb" src={currentUser.image_url}/>
                  {currentUser.username}
                </h3>
              </Link >
              <button className="logged-in-nav" onClick={this.handleLogOut}><h3>Log out</h3></button>
            </nav>
          </header>
        </div>
      </div>
      );
    }

  }
}

export default Navigation;
