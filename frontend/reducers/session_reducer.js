import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';
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
      return merge({}, defaultState, { currentUser });
    case RECEIVE_ERRORS:
      return merge({}, defaultState, { errors });
    default:
      return state;
  }
};
