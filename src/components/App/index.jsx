import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import LandingPage from "../LandingPage";
import SignUpPage from "../SignUpPage";
import SignInPage from "../SignInPage";
import PasswordForgetPage from "../PasswordForgetForm";
import withAuthentication from "../../containers/Session/withAuthentication";
import * as routes from "../../constants/routes";

// import containers
import { HomePageContainer } from "../../containers";
import { AccountPageContainer } from "../../containers";
import { NavigationContainer } from "../../containers";

import "./index.css";

const App = () =>
  <Router>
    <div className="app">
      <NavigationContainer />
      <hr />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePageContainer />} />
      <Route
        exact
        path={routes.ACCOUNT}
        component={() => <AccountPageContainer />}
      />
    </div>
  </Router>;

export default withAuthentication(App);
