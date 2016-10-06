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
        <Link to='/profile'><h4>{currentUser.username}</h4></Link>
      </nav>
    );
  }

  return (
    <div className="header-container">
      <header className="header group">
        <div className='header-logo'>
          <Link to='/'><h2>SoundByte</h2></Link>
        </div>
        {navHTML}
      </header>
      {children}
    </div>
  );
};

export default App;
