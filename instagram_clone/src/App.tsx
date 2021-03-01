import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { LOGIN } from "./constants/route";

const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
