import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NewTrackFormContainer from './new_track/new_track_form_container';
import TrackViewContainer from './track_view/track_view_container';
import {
  fetchAllTracksForUser,
  fetchCurrentTrackView,
  fetchLatestTracks } from '../actions/track_actions';
import { fetchAllComments } from '../actions/remark_actions';
import {  getOtherProfileView } from '../actions/user_actions';
import Modal from 'react-modal';
import OtherProfileViewContainter from './profile/other_profile_container';
import LatestTracksContainer from './latest_tracks/latest_track_container';

const Root = ({ store }) => {


  const ensureLoggedIn = () => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      hashHistory.push('/');
    }
  };

  const getTrackView = (nextState) => {
		store.dispatch(fetchCurrentTrackView(nextState.params.id));
  };

  const getProfileView = (nextState) => {
    store.dispatch(getOtherProfileView(nextState.params.id));
  };

  const getLatest = () => {
    store.dispatch(fetchLatestTracks());
  };


  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/home' component={ LatestTracksContainer } onEnter={ getLatest }></Route>
          <Route path='/login' component={ SessionFormContainer }></Route>
          <Route path='/profile/:id' component={ OtherProfileViewContainter } onEnter={ getProfileView }></Route>
          <Route path='/signup' component={ SignUpFormContainer }></Route>
          <Route path='/new-track-form' component={ NewTrackFormContainer } onEnter={ ensureLoggedIn }></Route>
          <Route path='/track-view/:id' component={ TrackViewContainer } onEnter={ getTrackView }></Route>
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
