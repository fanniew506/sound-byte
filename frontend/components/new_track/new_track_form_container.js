import { connect } from 'react-redux';
import NewTrackForm from './new_track_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = ({ session, tracks }) => ({
  loggedIn : Boolean(session.currentUser),
  errors: tracks.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrackForm);
