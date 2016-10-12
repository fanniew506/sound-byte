import { connect } from 'react-redux';
import Profile from './profile';
import { selectSong } from '../../actions/audio_actions';
import { fetchAllTracksForUser, currentTrackView, fetchAllComments } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
    selectSong: track => dispatch(selectSong(track)),
    fetchAllTracksForUser: () => dispatch(fetchAllTracksForUser()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
