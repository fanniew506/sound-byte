import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';

import TracksMiddleware from './tracks_middleware'

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware
);

export default RootMiddleware;
