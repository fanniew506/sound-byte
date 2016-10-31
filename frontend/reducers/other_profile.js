import { RECEIVE_OTHER_PROFILE_VIEW, RECEIVE_NEW_TRACK } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ user: null , tracks: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_OTHER_PROFILE_VIEW:
      return merge({}, defaultState, { user: action.otherView.user, tracks: action.otherView.tracks });
    case RECEIVE_NEW_TRACK:
      return merge({}, state, { tracks: action.track })
    default:
      return state;
  }
};
