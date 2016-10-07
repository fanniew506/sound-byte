import {
  CREATE_TRACK,
  receiveCurrentUserTracks,
  receiveErrors } from '../actions/session_actions';
import * as API from '../util/track_actions';

export default ({ dispatch }) => next => action => {
  const successCallBack = user => dispatch(receiveCurrentUserTracks(action.user))
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))

  switch(action.type) {
    case CREATE_TRACK:
      API.createTrack(action.track, successCallBack, errorCallback);
      return next(action);
    default:
      return(next(action));
  }
};
