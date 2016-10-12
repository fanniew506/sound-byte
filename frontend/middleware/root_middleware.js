import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import currentTrackViewMiddleWare from './current_track_view_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  currentTrackViewMiddleWare
);

export default RootMiddleware;
