import { CURRENT_TRACK_VIEW } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = { track: null};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CURRENT_TRACK_VIEW:
      return {track: action.track};
    default:
      return state;
  }
};
