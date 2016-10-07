import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { fetchAllTracksForUser } from '../../actions/track_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const actionType = (formType === 'login') ? login : signup;

  return {
    actionType: user => dispatch(actionType(user)),
    formType,
    fetchAllTracksForUser: user => dispatch(fetchAllTracksForUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
