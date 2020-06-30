import React, { FC } from 'react'
import {
  withRouter,
  Switch,
  Redirect,
  RouteComponentProps,
  Route
} from 'react-router-dom'
import {
  MarkPaper,
} from '../../pages'

import './index.scss'

const ContentMain: FC<RouteComponentProps> = () => {
  return (
    <div className="main__container">
      <Switch>
        <Route exact path="/index" component={MarkPaper} />

        <Redirect exact from="/" to="/index" />
      </Switch>
    </div>
  )
}

export default withRouter(ContentMain)