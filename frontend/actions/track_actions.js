export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const RECEIVE_CURRENT_USER_TRACKS = "RECEIVE_CURRENT_USER_TRACKS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const FETCH_ALL_TRACKS_FOR_USER = "FETCH_ALL_TRACKS_FOR_USER";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const FETCH_CURRENT_TRACK_VIEW = "FETCH_CURRENT_TRACK_VIEW";
export const CURRENT_TRACK_VIEW = "CURRENT_TRACK_VIEW";
export const GET_OTHER_PROFILE_VIEW = "GET_OTHER_PROFILE_VIEW";
export const RECEIVE_OTHER_PROFILE_VIEW = "RECEIVE_OTHER_PROFILE_VIEW";
export const FETCH_LATEST_TRACKS = "FETCH_LATEST_TRACKS";
export const RECEIVE_LATEST_TRACKS = "RECEIVE_LATEST_TRACKS";

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


export const fetchCurrentTrackView = id => ({
  type: FETCH_CURRENT_TRACK_VIEW,
  id
});

export const currentTrackView = (track) => ({
  type: CURRENT_TRACK_VIEW,
  track
});

export const getOtherProfileView = (id) => ({
  type: GET_OTHER_PROFILE_VIEW,
  id
});

export const receiveOtherProfileView = (otherView) => ({
  type: RECEIVE_OTHER_PROFILE_VIEW,
  otherView
});

export const fetchLatestTracks = () => ({
  type: fetchLatestTracks
});

export const receiveLatestTracks = tracks => ({
  type: RECEIVE_LATEST_TRACKS,
  tracks
});
