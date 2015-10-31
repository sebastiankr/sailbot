'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, History } from 'react-router';
import { createHistory, useBasename } from 'history';
import  { About, log } from './components/about.jsx';
import { Login } from './components/login.jsx';
import auth from './auth';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const history = useBasename(createHistory)({
  basename: '' // set a different URL base path e.g. 'area' -> http://url/area/
});

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
  log();
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const Dashboard = React.createClass({
  render() {
    const token = auth.getToken()

    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    )
  }
})




const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

render((
  <Router history={history}>
    <Route path="login" component={Login} />
    <Route path="/" component={App} onEnter={requireAuth} >
      <Route path="logout" component={Logout} />
      <Route path="about" component={About} onEnter={requireAuth} />
      <Route path="dashboard" component={Dashboard}  />
    </Route>
  </Router>
), document.getElementById('example'))