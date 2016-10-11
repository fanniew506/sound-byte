import { connect } from 'react-redux';
import TrackView from './track_view';

const mapStateToProps = ({ currentTrackView }) => ({
  currentTrackView: currentTrackView.track
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackView);
