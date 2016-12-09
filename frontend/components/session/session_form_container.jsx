import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { fetchAllTracksForUser } from '../../actions/track_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.errors
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    fetchAllTracksForUser: () => dispatch(fetchAllTracksForUser()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
