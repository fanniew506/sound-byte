export const GET_OTHER_PROFILE_VIEW = "GET_OTHER_PROFILE_VIEW";
export const RECEIVE_OTHER_PROFILE_VIEW = "RECEIVE_OTHER_PROFILE_VIEW";
export const UPDATE_USER = "UPDATE_USER";

export const getOtherProfileView = (id) => ({
  type: GET_OTHER_PROFILE_VIEW,
  id
});

export const receiveOtherProfileView = (otherView) => ({
  type: RECEIVE_OTHER_PROFILE_VIEW,
  otherView
});

export const updateUser = data => ({
  type: UPDATE_USER,
  data
});
