import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import {
  onPlay,
  onResume,
  onPause,
  onStopped,
  onFinishedPlaying,
  onVolumeUp,
  onVolumeDown,
  duration,
  playFromPosition } from '../../actions/audio_actions'

const mapStateToProps = ({ audio }) => ({
  currentSong: audio.currentSong,
  position: audio.position,
  volume: audio.volume,
  playStatus: audio.playStatus,
});

const mapDispatchToProps = (dispatch) => ({
    onPlay: () => dispatch(onPlay()),
    onResume: () => dispatch(onResume()),
    onPause: () => dispatch(onPause()),
    onStopped: () => dispatch(onStopped()),
    onFinishedPlaying: () => dispatch(onFinishedPlaying()),
    onVolumeUp: () => dispatch(onVolumeUp()),
    onVolumeDown: () => dispatch(onVolumeDown()),
    duration: () => dispatch(duration()),
    playFromPosition: () => dispatch(playFromPosition())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
