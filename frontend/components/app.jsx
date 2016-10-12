import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import AudioPlayerContainer from './audio_player/audio_player_container.js';

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
      <div className="content group">
        {children}
      </div>
      <AudioPlayerContainer/>
    </div>
  );
};

export default App;
