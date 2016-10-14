import { ALL_COMMENTS } from '../actions/remark_actions';
import { RECEIVE_OTHER_PROFILE_VIEW } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ user: null , tracks: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_OTHER_PROFILE_VIEW:
      return merge({}, defaultState, {user: action.otherView.user, tracks: action.otherView.tracks });

    default:
      return state;
  }
};
