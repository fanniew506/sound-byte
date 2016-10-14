import { ALL_COMMENTS } from '../actions/remark_actions';
import { CURRENT_TRACK_VIEW } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ track: null, comments: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case CURRENT_TRACK_VIEW:
      const reversed = action.track.comments.reverse();
      return merge({}, defaultState, {track: action.track.track, comments: reversed });
    default:
      return state;
  }
};
