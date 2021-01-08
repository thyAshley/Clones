import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import Firebase from "firebase";

export const IsUserRedirect: React.FC<{
  user: Firebase.User | null;
  loggedInPath: string;
}> = ({ user, loggedInPath, children, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
};

export const ProtectedRoute: React.FC<
  RouteProps & { user: null | Firebase.User }
> = ({ user, children, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }
        return null;
      }}
    />
  );
};
