import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import { createTrack, fetchAllTracksForUser } from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    window.login  = login;
    window.logout = logout;
    window.signup = signup;
    window.createTrack = createTrack;
    window.fetchAllTracksForUser = fetchAllTracksForUser;
    if (window.currentUser) {
      const initialState = {
        session: {
          currentUser: window.currentUser
        },
        tracks: {
        },
        currentTrackView: {
          track: null
        },
        audio: {
          currentSong: null,
          position: 0,
          volume: 50,
          playStatus: Sound.status.PLAYING,
        }
      };
      store = configureStore(initialState);
      store.dispatch(fetchAllTracksForUser());
    } else {
      store = configureStore();
    }
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
