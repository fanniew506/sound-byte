import {
  RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  errors: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return ({ errors: action.error });
    case CLEAR_ERRORS:
      return defaultState;
    default:
      return state;
  }
};
