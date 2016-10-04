import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser,
  receiveErrors } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';

export default ({ dispatch }) => next => action => {
  const successCallBack = user => dispatch(receiveCurrentUser(action.user))
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallBack, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallBack, errorCallback);
      return next(action);
    default:
      return(next(action));
  }
};
