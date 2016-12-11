import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.errors
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
