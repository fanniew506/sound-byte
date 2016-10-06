import { connect } from 'react-redux';
import Profile from './profile';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn : Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
