import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect } from './helpers/routes' 

export default function App() {
  const user = {};

  return ( 
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>       
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Route exact path='/browse' >
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME} >
        <Home />
      </Route>
    </Router> 
  )
}
