import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Autorisation from './views/autorisation'
import FastGames from './views/fast-games'
import TestPage from './views/test-page'
import Home from './views/home'
import TestNewClass from './views/test-new-class'
import TestPageLotteryType from './views/test-page-lottery-type'
import Registration from './views/registration'
import AutorisationPage from './views/autorisation-page'
import TetsPage2 from './views/tets-page2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Autorisation} exact path="/autorisation" />
        <Route component={FastGames} exact path="/fast-games" />
        <Route component={TestPage} exact path="/test-page" />
        <Route component={Home} exact path="/" />
        <Route component={TestNewClass} exact path="/test-new-class" />
        <Route
          component={TestPageLotteryType}
          exact
          path="/test-page-lottery-type"
        />
        <Route component={Registration} exact path="/registration" />
        <Route component={AutorisationPage} exact path="/autorisation-page" />
        <Route component={TetsPage2} exact path="/tets-page2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
