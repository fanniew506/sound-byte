import {
  CREATE_TRACK,
  UPDATE_TRACK,
  DELETE_TRACK,
  FETCH_ALL_TRACKS_FOR_USER,
  CURRENT_TRACK_VIEW,
  receiveCurrentUserTracks,
  receiveAllTracks,
  receiveErrors,
  currentTrackView } from '../actions/track_actions';
import * as API from '../util/track_api_util';

export default ({ dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))
  const fetchSuccess = tracks => dispatch(receiveAllTracks(tracks))

  switch(action.type) {
    case CREATE_TRACK:
      API.createTrack(action.track, () => dispatch(fetchAllTracksForUser()), errorCallback);
      return next(action);
    case UPDATE_TRACK:
      API.updateTrack(action.track, () => dispatch(fetchAllTracksForUser()), errorCallback)
      return next(action);
    case DELETE_TRACK:
      API.deleteTrack(() => dispatch(fetchAllTracksForUser()), errorCallback)
      return next(action);
    case FETCH_ALL_TRACKS_FOR_USER:
    debugger
      API.fetchAllTracksForUser(fetchSuccess, errorCallback);
      return next(action);
    case CURRENT_TRACK_VIEW:
      return (next(action));
    default:
      return(next(action));
  }
};
