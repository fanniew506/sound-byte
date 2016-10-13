import { connect } from 'react-redux';
import TrackView from './track_view';
import { fetchAllComments, createComment } from '../../actions/remark_actions';
import { fetchCurrentTrackView } from '../../actions/track_actions';
import { selectSong, onPlay, onPause, onResume } from '../../actions/audio_actions';

const mapStateToProps = ({ currentTrackView, session, audio }) => {
  return {
  currentUser: session.currentUser,
  currentTrackView: currentTrackView.track,
  comments: currentTrackView.comments,
  currentSong: audio.currentSong,
  playStatus: audio.playStatus
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentTrackView: (id) => dispatch(fetchCurrentTrackView(id)),
  fetchAllComments: (id) => dispatch(fetchAllComments(id)),
  createComment: comment => dispatch(createComment(comment)),
  selectSong: track => dispatch(selectSong(track)),
  onPlay: () => dispatch(onPlay()),
  onResume: () => dispatch(onResume()),
  onPause: () => dispatch(onPause()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackView);
