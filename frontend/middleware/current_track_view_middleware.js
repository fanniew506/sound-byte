import { FETCH_CURRENT_TRACK_VIEW , currentTrackView } from '../actions/track_actions';
import { FETCH_ALL_COMMENTS, allComments, CREATE_COMMENT } from '../actions/remark_actions';
import { fetchCurrentTrackView } from '../util/track_api_util';
import { fetchAllComments, createComment } from '../util/remark_api_util';
import { receiveErrors } from '../actions/session_actions';

export default ({ dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON))
  const fetchTrackSuccess = track => dispatch(currentTrackView(track))
  const fetchCommentSuccess = comments => dispatch(allComments(comments))

  switch(action.type) {
    case FETCH_CURRENT_TRACK_VIEW:
      fetchCurrentTrackView(action.id, fetchTrackSuccess, errorCallback)
      return next(action)
    case FETCH_ALL_COMMENTS:
      fetchAllComments(action.id, fetchCommentSuccess, errorCallback);
      return next(action)
    case CREATE_COMMENT:
      createComment(action.data);
      break;
    default:
      return(next(action));
  }
};
