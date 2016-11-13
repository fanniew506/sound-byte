import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import { createTrack, fetchAllTracksForUser, fetchAllComments, allComments } from './actions/track_actions';

window.soundManager.setup({debugMode: false});
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const initialState = {
        session: {
          currentUser: window.currentUser
        },
        tracks: {
        },
        currentTrackView: {
          track: null,
          comments: null
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
