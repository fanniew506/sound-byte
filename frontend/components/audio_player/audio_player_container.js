import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import {
  onPlay,
  onResume,
  onPause,
  onStop,
  onFinishedPlaying,
  onVolumeUp,
  onVolumeDown,
  duration,
  playFromPosition,
  updatePosition } from '../../actions/audio_actions';

const mapStateToProps = ({ audio }) => ({
  currentSong: audio.currentSong,
  position: audio.position,
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
    updatePosition: (position) => dispatch(updatePosition(position))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
