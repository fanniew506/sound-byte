import {
  LOGOUT,
  RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case LOGOUT:
      return merge({}, defaultState);
    case RECEIVE_CURRENT_USER:
      return merge({}, defaultState, { currentUser: action.currentUser.user });
    default:
      return state;
  }
};
