import { connect } from 'react-redux';
import OtherProfileView from './other_profile';
import { selectSong } from '../../actions/audio_actions';
import { fetchAllTracksForOtherUser, currentTrackView} from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  otherUser: state.otherUser.otherUser,
  otherUserTracks: state.otherUser.otherUserTracks
});

const mapDispatchToProps = (dispatch) => ({
    selectSong: track => dispatch(selectSong(track)),
    fetchAllTracksForOtherUser: (id) => dispatch(fetchAllTracksForOtherUser(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherProfileView);
