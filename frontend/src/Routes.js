import React from 'react'
import { Route, Switch } from 'react-router';

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Checkout from './components/Checkout/Checkout'

function Routes() {
    return (
        <Switch>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route exact path="/login" render={() => <LoginScreen />} />
          <Route exact path="/register" render={() => <RegisterScreen />} />
          <Route exact path="/checkout" render={() => <Checkout />} />
          {/* <Route exact path="/orders" render={() => <Orders />} /> */}
          {/* <Route exact path="/shipping" render={() => <Checkout />} /> */}
        </Switch>
    )
}

export default Routes
