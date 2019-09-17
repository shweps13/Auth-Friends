import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

import Friends from './components/Friends/Friends'
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
              <Button primary>
                <Link to="/login">Login</Link>
              </Button>
              <Button secondary>
                <Link to="/friends">Friends Page</Link>
              </Button>
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
