import { connect } from 'react-redux';
import NewTrackForm from './new_track_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  loggedIn : Boolean(state.session.currentUser),
  errors: state.tracks.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrackForm);
