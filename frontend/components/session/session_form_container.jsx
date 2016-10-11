import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { fetchAllTracksForUser } from '../../actions/track_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {

  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    fetchAllTracksForUser: () => dispatch(fetchAllTracksForUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
