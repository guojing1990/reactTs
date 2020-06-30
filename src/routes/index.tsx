import React from 'react'
import {
  Switch, Redirect, Route,
} from 'react-router-dom'

import Main from '../components/Main/index'

const Routes = () => (
  <Switch>
    <Route component={Main} path="/index" />
    <Redirect exact from="/" to="/index" />
  </Switch>
)

export default Routes