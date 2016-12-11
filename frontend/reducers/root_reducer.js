import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import AudioReducer from './audio_reducer';
import CurrentTrackViewReducer from './current_track_view_reducer';
import OtherViewReducer from './other_profile';
import LatestTracksReducer from './latest_tracks';
import ErrorReducer from './error_reducer';

export default combineReducers({
  session: SessionReducer,
  currentTrackView: CurrentTrackViewReducer,
  audio: AudioReducer,
  otherView: OtherViewReducer,
  latestTracks: LatestTracksReducer,
  errors: ErrorReducer
});
