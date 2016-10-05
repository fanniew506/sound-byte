import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => {
  return (
    <div className="header-container">
      <header className="header group">

        <div className='header-logo'>
          <Link to='/'><h2>SoundByte</h2></Link>
        </div>

        <nav className='header-nav'>
          <Link to='/login'><h4>Log In</h4></Link>
          <Link to='/signup'><h4>Create Account</h4></Link>
        </nav>
      </header>
      {children}
    </div>
  );

};

export default App;
