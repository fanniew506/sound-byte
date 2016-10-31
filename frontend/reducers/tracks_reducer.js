import {
  RECEIVE_CURRENT_USER_TRACKS,
  RECEIVE_ALL_TRACKS,
  RECEIVE_ERRORS,
  RECEIVE_NEW_TRACK
  } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  errors: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER_TRACKS:
      const trackId = action.track.id;
      const obj = { [trackId]: action.track };
      return merge({}, defaultState, obj );
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_ERRORS:
      return merge({}, action.errors);
    case RECEIVE_NEW_TRACK:
    default:
      return state;
  }
};
