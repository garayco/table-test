import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Roles from "../pages/roles";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route component={Roles} path="/perfiles/roles" exact />
      <Redirect from="/*" to="/perfiles/roles" />
    </Switch>
  );
};

export default PrivateRoutes;
