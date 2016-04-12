import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

// Components
import MovieContainer from 'ui/movies-container';

ReactDOM.render((  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={MovieContainer} />
    </Route>
  </Router>
), document.getElementById('app'));