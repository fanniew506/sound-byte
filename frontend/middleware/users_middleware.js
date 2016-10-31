import * as API from '../util/user_api_util';
import { GET_OTHER_PROFILE_VIEW, receiveOtherProfileView, UPDATE_USER } from '../actions/user_actions';
import { receiveCurrentUser } from '../actions/session_actions';

export default ({ dispatch }) => next => action => {
  const fetchSuccess = data => dispatch(receiveOtherProfileView(data));
  // const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const updateSuccess = data => dispatch(receiveCurrentUser(data));

  switch(action.type) {
    case GET_OTHER_PROFILE_VIEW:
      API.getOtherProfileView(action.id, fetchSuccess);
      return next(action);
    case UPDATE_USER:
    debugger
      API.updateUser(action.data, updateSuccess);
      return(next(action));
    default:
      return(next(action));
  }
};
