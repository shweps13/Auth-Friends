import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Friends from './components/Friends'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            Friends App
          </h1>
        </header>
        <div className="Links">
            <div className="LinksBlock">
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/friends">Friends Page</Link>
              </p>
            </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
