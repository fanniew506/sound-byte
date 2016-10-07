import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';

const App = ({children}) => {
  return (
    <div className="body-container">
      <div className="header-container">
        <header className="header group">
          <div className='header-logo'>
            <Link to='/'><h2>SoundByte</h2></Link>
          </div>
          <NavigationContainer/>
        </header>
      </div>
      {children}
    </div>
  );
};

export default App;
