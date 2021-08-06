import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../features/home/Home";
import User from "../../features/user/User";
import PageNotFound from "../../features/notFound/NotFound";

export const routes = {
  home: "/home",
  user: "/user",
  NOT_FOUND: "/404",
};

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Redirect to={routes.home} />
        </Route>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.user} component={User} />
        <Route exact path={routes.NOT_FOUND} component={PageNotFound} />
      </Switch>
    </div>
  );
};
