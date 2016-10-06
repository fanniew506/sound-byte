import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app'
import SessionFormContainer from './session/session_form_container';
import Profile from './profile/profile'

const Root = ({ store }) => {

  const redirectIfLoggedIn = () => {
    debugger
    const currentUser = store.getState().session.currentUser
    if(currentUser) hashHistory.push('/profile');
  }

  const ensureLoggedIn = () => {
    const currentUser = store.getState().session.currentUser
    if(!currentUser) hashHistory.push('/login');
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App }>
          <Route path='/login' component={ SessionFormContainer } onEnter={redirectIfLoggedIn}></Route>
          <Route path='/signup' component={ SessionFormContainer } onEnter={redirectIfLoggedIn}></Route>
          <Route path='/profile' component={ Profile } onEnter={ ensureLoggedIn}></Route>
        </Route>
      </Router>
    </Provider>
  );

}

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
