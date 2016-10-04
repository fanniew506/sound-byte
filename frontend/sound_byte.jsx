import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
