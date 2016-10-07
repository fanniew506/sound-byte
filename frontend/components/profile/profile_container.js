import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});


export default connect(
  mapStateToProps
)(Profile);
