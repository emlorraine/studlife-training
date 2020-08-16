import React from 'react';
import logo from './logo.svg';
import Main from './components/Main.js';
import Navigation from './Navigation';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import * as ROUTES from './components/Routes/Routes.js';

// import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import './App.css';

function App() {
  return (
    <div className="root">
      <Main />
      {/* <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router> */}
    </div>
  );
}

export default App;