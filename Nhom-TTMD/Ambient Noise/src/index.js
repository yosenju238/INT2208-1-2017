import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Group from './Group';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


ReactDOM.render(
  // <Home />,
  // <Group />,
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/group" component={Group} />
                </div>
            </Router>,
  document.getElementById('root')
);
