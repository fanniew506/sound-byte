import { ALL_COMMENTS } from '../actions/remark_actions';
import { CURRENT_TRACK_VIEW } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({ track: null, comments: null});

export default (state = defaultState, action) => {
  switch(action.type) {
    case CURRENT_TRACK_VIEW:
      return merge({}, defaultState, action.track);
    default:
      return state;
  }
};
