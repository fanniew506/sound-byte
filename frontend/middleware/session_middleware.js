import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser } from '../actions/session_actions';
import {
  receiveErrors } from '../actions/error_actions';
import { login, logout, signup } from '../util/session_api_util';

export default ({ dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return(next(action));
  }
};
