import { connect } from 'react-redux';
import Profile from './profile';
import { currentTrackView, selectSong } from '../../actions/audio_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
    currentTrackView: track => dispatch(currentTrackView(track)),
    selectSong: track => dispatch(selectSong(track))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
