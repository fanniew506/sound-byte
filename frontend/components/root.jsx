import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import NewTrackFormContainer from './new_track/new_track_form_container';
import TrackViewContainer from './track_view/track_view_container';
import { fetchAllTracksForUser, fetchCurrentTrackView } from '../actions/track_actions';
import { fetchAllComments } from '../actions/remark_actions';
import Modal from 'react-modal';

const Root = ({ store }) => {


  const ensureLoggedIn = () => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      hashHistory.push('/');
    }
  };

  const getTrackView = (nextState) => {
		store.dispatch(fetchCurrentTrackView(nextState.params.id))
  }

  const getProfileView = () => {
    store.dispatch(fetchAllTracksForUser())
  }

  const getProfileView = (nextState) => {
    store.dispatch(getOtherProfileView(nextState.params.id))
  }


  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/profile' component={ ProfileContainer } onEnter={ getProfileView }></Route>
          <Route path='/login' component={ SessionFormContainer }> formType="login"</Route>
          <Route path='/signup' component={ SignUpFormContainer }> formType="signups"</Route>
          <Route path='/new-track-form' component={ NewTrackFormContainer } onEnter={ ensureLoggedIn }></Route>
          <Route path='/track-view/:id' component={ TrackViewContainer } onEnter={ getTrackView }></Route>
          <Route path='/profile/:id' component={ OtherProfileViewContainter } onEnter={ getOtherProfileView }></Route>
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
