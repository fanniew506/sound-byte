import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import AudioPlayerContainer from './audio_player/audio_player_container.js';

const App = ({children}) => {
  return (
    <div className="body-container group">
      <NavigationContainer/>
      <div className="content group">
          {children}
          <audio src="http://s3.amazonaws.com/sound-byte-dev/tracks/audios/000/000/001/original/The_20Irish_20Washerwoman.mp3?1476237886">
          </audio>
      </div>
        <AudioPlayerContainer/>
    </div>
  );
};

export default App;
