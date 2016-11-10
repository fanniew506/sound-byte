import { RECEIVE_LATEST_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ tracks: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_LATEST_TRACKS:
      return merge({}, defaultState, {tracks: action.tracks});
    default:
      return state;
  }
};
