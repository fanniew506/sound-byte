import {
  RECEIVE_CURRENT_USER_TRACKS,
  RECEIVE_CURRENT_USER,
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
    default:
      return state;
  }
};
