import { ALL_COMMENTS } from '../actions/remark_actions';
import { CURRENT_TRACK_VIEW } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ track: null, comments: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case CURRENT_TRACK_VIEW:
      return merge({}, state, {track: action.track});
    case ALL_COMMENTS:
      return merge({}, state, {comments: action.comments});
    default:
      return state;
  }
};
