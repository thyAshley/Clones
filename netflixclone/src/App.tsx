import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constant/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/useAuthListener";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
          ></IsUserRedirect>
          <Signin />
        </Route>

        <Route path={ROUTES.SIGN_UP}>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
          ></IsUserRedirect>
          <Signup />
        </Route>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
          <Route exact path={ROUTES.HOME} component={Home}></Route>
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
