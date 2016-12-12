import { connect } from 'react-redux';
import NewTrackForm from './new_track_form';
import { createTrack } from '../../actions/track_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  loggedIn : Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  errors: state.errors.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTrack: track => dispatch(createTrack(track)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrackForm);
