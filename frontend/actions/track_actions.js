export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const RECEIVE_CURRENT_USER_TRACKS = "RECEIVE_CURRENT_USER_TRACKS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const FETCH_ALL_TRACKS_FOR_USER = "FETCH_ALL_TRACKS_FOR_USER";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const CURRENT_TRACK_VIEW = "CURRENT_TRACK_VIEW";

export const createTrack = track => ({
  type: CREATE_TRACK,
  track
});

export const updateTrack = track => ({
  type: UPDATE_TRACK,
  track
});

export const deleteTrack = track => ({
  type: DELETE_TRACK,
  track
});

export const receiveCurrentUserTracks = track => ({
  type: RECEIVE_CURRENT_USER_TRACKS,
  track
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAllTracksForUser = () => ({
  type: FETCH_ALL_TRACKS_FOR_USER
});

export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const currentTrackView = track => ({
  type: CURRENT_TRACK_VIEW,
  track
});
