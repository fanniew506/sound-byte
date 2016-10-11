import {
  ON_PLAY,
  ON_PAUSE,
  ON_RESUME,
  ON_STOPPED,
  ON_FINISHED_PLAYING,
  ON_SEEK,
  ON_VOLUME_UP,
  ON_VOLUME_DOWN,
  DURATION,
  SELECT_SONG,
  PLAY_FROM_POSITION } from '../actions/audio_actions';
import merge from 'lodash/merge';
import Sound from 'react-sound';

const defaultState = {
  currentSong: null,
  position: 0,
  volume: 50,
  playStatus: Sound.status.STOPPED };

export default (state = defaultState, action) => {
  switch(action.type) {
    case ON_PLAY:
      return merge({}, state, {playStatus: Sound.status.PLAYING} );
    case ON_PAUSE:
      return merge({}, state, {playStatus: Sound.status.PAUSED} );
    case ON_RESUME:
      return merge({}, state, {playStatus: Sound.status.PLAYING} );
    case ON_STOPPED:
      return merge({}, state, {playStatus: Sound.status.STOPPED} );
    case ON_SEEK:
      return merge({}, state, { position: action.position } );
    case ON_FINISHED_PLAYING:
      return merge({}, state, {playStatus: Sound.status.STOPPED} );
    case ON_VOLUME_UP:
      return merge({}, state, {volume: volume+10} );
    case ON_VOLUME_DOWN:
      return merge({}, state, {volume: volume+10} );
    case SELECT_SONG:
      return merge({}, state, { currentSong: action.track });
    default:
      return defaultState;
  }
};
