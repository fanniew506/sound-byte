import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => {
  const currentUser = store.getState().session.currentUser
  let navHTML;

  if (currentUser === null){
    navHTML = (
      <nav className='header-nav loggedout'>
        <Link to='/login'><h4>Log In</h4></Link>
        <Link to='/signup'><h4>Create Account</h4></Link>
      </nav>
    );
  } else {
    navHTML = (
      <nav className='header-nav loggedin'>
        <Link to='/new-track-form'><h4>Upload</h4></Link>
        <Link to='/profile'><h4>{currentUser.username}</h4></Link>
        <ul>
          <li>

          </li>
          <li>

          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className="body-container">
      <div className="header-container">
        <header className="header group">
          <div className='header-logo'>
            <Link to='/'><h2>SoundByte</h2></Link>
          </div>
          {navHTML}
        </header>
      </div>
      {children}
    </div>
  );
};

export default App;
