import React from 'react';
import { Link, hashHistory } from 'react-router';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logout();
    hashHistory.push('/');
  }
  render() {
    const currentUser = this.props.currentUser;
    if (currentUser === null){
      return(
          <nav className='header-nav loggedout'>
            <Link to='/login'><h4>Log In</h4></Link>
            <Link to='/signup'><h4>Create Account</h4></Link>
          </nav>
        );
      } else {
      return (
        <nav className='header-nav loggedin'>
          <Link to='/new-track-form'><h4>Upload</h4></Link>
          <Link to='/profile'><h4>{currentUser.username}</h4></Link>
          <button onClick={this.handleLogOut}><h4>Log out</h4></button>
          <ul>
            <li>

            </li>
            <li>

            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navigation;
