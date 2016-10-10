import {
  RECEIVE_CURRENT_USER_TRACKS,
  RECEIVE_ALL_TRACKS,
  RECEIVE_ERRORS } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  errors: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER_TRACKS:
      const track_id = action.track.id;
      const obj = { [track_id]: action.track };
      return merge({}, defaultState, obj );
    case RECEIVE_ALL_TRACKS:
    debugger
      return merge({}, action.tracks);
    case RECEIVE_ERRORS:
    debugger
      return merge({}, action.errors);
    default:
      return state;
  }
};
