import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes' 

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
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>     
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
        exact
      >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect 
        exact 
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME} 
      >
        <Home />
      </IsUserRedirect>
    </Router> 
  )
}
