import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  authenticated,
  user,
  ...rest
}) => {
  return (
    <Route
      render={(props) =>
        authenticated ? (
          <Component {...props}  {...rest} user={user} />
        ) : (
          <Redirect to="/login" />
        )
      }
      {...rest}
    />
  );
};
export default PrivateRoute;
