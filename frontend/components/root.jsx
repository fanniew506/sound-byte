import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app'
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={ App }>
        <Route path='/login' component={ SessionFormContainer }></Route>
        <Route path='/signup' component={ SessionFormContainer }></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;


// <Route path ='/latest' component={LatestTrackContainer}></Route>

// <Route path ='/profile' component={ProfileContainer}>
//   <Route path ='/tracks' component={TrackIndex}>
//     <Route path ='/track' component={TrackContainer}>
//       <Route path ='/comments' component={CommentIndex}></Route>
//     </Route>
//   </Route>
// </Route>
