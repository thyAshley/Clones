import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constant/routes";

import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.BROWSE} component={Browse}></Route>
        <Route path={ROUTES.SIGN_IN} component={Signin}></Route>
        <Route path={ROUTES.SIGN_UP} component={Signup}></Route>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
