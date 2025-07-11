import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SignIn from './views/sign-in'
import Loginform from './views/loginform'
import FastGames from './views/fast-games'
import TestPage from './views/test-page'
import Home from './views/home'
import Registration from './views/registration'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={Loginform} exact path="/loginform" />
        <Route component={FastGames} exact path="/fast-games" />
        <Route component={TestPage} exact path="/test-page" />
        <Route component={Home} exact path="/" />
        <Route component={Registration} exact path="/registration" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
