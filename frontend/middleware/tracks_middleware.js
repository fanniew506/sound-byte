import {
  CREATE_TRACK,
  UPDATE_TRACK,
  DELETE_TRACK,
  receiveCurrentUserTracks,
  receiveErrors } from '../actions/track_actions';
import * as API from '../util/track_api_util';

export default ({ dispatch }) => next => action => {
  const successCallBack = track => dispatch(receiveCurrentUserTracks(track))
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))

  switch(action.type) {
    case CREATE_TRACK:
      API.createTrack(action.track, successCallBack, errorCallback);
      return next(action);
    case UPDATE_TRACK:
      API.updateTrack(action.track, successCallBack, errorCallback)
      return next(action);
    case DELETE_TRACK:
      API.deleteTrack(successCallBack, errorCallback)
      return next(action);
    default:
      return(next(action));
  }
};
