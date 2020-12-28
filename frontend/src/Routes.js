import React from 'react'
import { Route, Switch } from 'react-router';

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function Routes() {
    return (
        <Switch>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route exact path="/login" render={() => <LoginScreen />} />
          <Route exact path="/register" render={() => <RegisterScreen />} />
        </Switch>
    )
}

export default Routes
