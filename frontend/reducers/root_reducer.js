import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import AudioReducer from './audio_reducer';
import CurrentTrackViewReducer from './current_track_view_reducer';


export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  currentTrackView: CurrentTrackViewReducer,
  audio: AudioReducer
});
