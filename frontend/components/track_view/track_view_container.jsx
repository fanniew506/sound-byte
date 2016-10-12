import { connect } from 'react-redux';
import TrackView from './track_view';
import { fetchAllComments } from '../../actions/track_actions';

const mapStateToProps = ({ currentTrackView }) => ({
  currentTrackView: currentTrackView.track,
  comments: currentTrackView.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllComments: (id) => dispatch(fetchAllComments(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackView);
