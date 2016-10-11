import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import ProfileContainer from './profile/profile_container';
import NewTrackFormContainer from './new_track/new_track_form_container';
import TrackViewContainer from './track_view/track_view_container';


const Root = ({ store }) => {

  const redirectIfLoggedIn = () => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) hashHistory.push('/profile');
  };

  const ensureLoggedIn = () => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) hashHistory.push('/');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App }>
          <Route path='/profile' component={ ProfileContainer } onEnter={ ensureLoggedIn }></Route>
          <Route path='/new-track-form' component={ NewTrackFormContainer } onEnter={ ensureLoggedIn }></Route>
          <Route path='/track-view' component={ TrackViewContainer }></Route>
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;

// <Route path='/home' component={ HomeContainer }>

// <Route path ='/latest' component={LatestTrackContainer}></Route>

// <Route path ='/profile' component={ProfileContainer}>
//   <Route path ='/tracks' component={TrackIndex}>
//     <Route path ='/track' component={TrackContainer}>
//       <Route path ='/comments' component={CommentIndex}></Route>
//     </Route>
//   </Route>
// </Route>
