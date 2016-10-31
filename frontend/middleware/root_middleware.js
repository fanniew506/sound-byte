import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import CurrentTrackViewMiddleWare from './current_track_view_middleware';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  CurrentTrackViewMiddleWare,
  UsersMiddleware
);

export default RootMiddleware;
