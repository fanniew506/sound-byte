import { connect } from 'react-redux';
import TrackView from './track_view';
import { fetchAllComments, createComment } from '../../actions/remark_actions';
import { fetchCurrentTrackView } from '../../actions/track_actions';

const mapStateToProps = ({ currentTrackView, session }) => {
  return {
  currentUser: session.currentUser,
  currentTrackView: currentTrackView.track,
  comments: currentTrackView.comments
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentTrackView: () => dispatch(fetchCurrentTrackView()),
  fetchAllComments: (id) => dispatch(fetchAllComments(id)),
  createComment: comment => dispatch(createComment(comment))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackView);
