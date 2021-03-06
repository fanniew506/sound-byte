import { connect } from 'react-redux';
import OtherProfileView from './other_profile';
import { selectSong } from '../../actions/audio_actions';
import { fetchAllTracksForOtherUser, currentTrackView} from '../../actions/track_actions';
import { updateUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.otherView.user,
  tracks: state.otherView.tracks,
  currentUser: state.session.currentUser,
  errors: state.errors.errors
});

const mapDispatchToProps = (dispatch) => ({
    selectSong: track => dispatch(selectSong(track)),
    fetchAllTracksForOtherUser: (id) => dispatch(fetchAllTracksForOtherUser(id)),
    updateUser: (data) => dispatch(updateUser(data)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherProfileView);
