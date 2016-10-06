import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    window.store = store;
    window.login  = login;
    window.logout = logout;
    window.signup = signup;
    if (window.currentUser) {
      const initialState = {
        session: {
          currentUser: window.currentUser
        }
      };
      store = configureStore(initialState);
    } else {
      store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
