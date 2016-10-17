import {
  CREATE_TRACK,
  UPDATE_TRACK,
  DELETE_TRACK,
  FETCH_ALL_TRACKS_FOR_USER,
  receiveCurrentUserTracks,
  receiveAllTracks,
  receiveErrors,
  GET_OTHER_PROFILE_VIEW,
  receiveOtherProfileView,
  FETCH_LATEST_TRACKS,
  receiveLatestTracks,
  } from '../actions/track_actions';

import * as API from '../util/track_api_util';

export default ({ dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))
  const fetchSuccess = tracks => dispatch(receiveAllTracks(tracks))
  const otherFetchSuccess = data => dispatch(receiveOtherProfileView(data))
  const latestSuccess = tracks => dispatch(receiveLatestTracks(tracks))

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
      API.fetchAllTracksForUser(fetchSuccess, errorCallback);
      return next(action);
    case GET_OTHER_PROFILE_VIEW:
      API.getOtherProfileView(action.id, otherFetchSuccess, errorCallback);
      return next(action);
    case FETCH_LATEST_TRACKS:
    debugger
      API.fetchLatestTracks(latestSuccess, errorCallback);
      return next(action);
    default:
      return(next(action));
  }
};
