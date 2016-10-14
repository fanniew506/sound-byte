import { ALL_COMMENTS } from '../actions/remark_actions';
import { RECEIVE_OTHER_PROFILE_VIEW, RECEIVE_LATEST_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ tracks: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_LATEST_TRACKS:
    debugger
      return merge({}, defaultState, {tracks: action.tracks});
    default:
      return state;
  }
};
