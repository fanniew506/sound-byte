import { connect } from 'react-redux';
import TrackPlayerControls from './track_player_controls';
import {
  onPlay,
  onResume,
  onPause,
  onStop,
  onFinishedPlaying,
  onVolumeUp,
  onVolumeDown,
  duration,
  selectSong,
  updatePosition,
  playFromPosition } from '../../actions/audio_actions';

const mapStateToProps = ({ audio, currentTrackView }) => ({
  currentSong: audio.currentSong,
  position: audio.position,
  volume: audio.volume,
  playStatus: audio.playStatus,
});

const mapDispatchToProps = (dispatch) => ({
    onPlay: () => dispatch(onPlay()),
    onResume: () => dispatch(onResume()),
    onPause: () => dispatch(onPause()),
    onStop: () => dispatch(onStop()),
    onFinishedPlaying: () => dispatch(onFinishedPlaying()),
    onVolumeUp: () => dispatch(onVolumeUp()),
    onVolumeDown: () => dispatch(onVolumeDown()),
    duration: () => dispatch(duration()),
    playFromPosition: () => dispatch(playFromPosition()),
    updatePosition: (position) => dispatch(updatePosition(position)),
    selectSong: (track) => dispatch(selectSong(track))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPlayerControls);
