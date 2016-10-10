import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
  
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
