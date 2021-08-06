import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
const Home = React.lazy(() => import("../../features/home/Home"));
const User = React.lazy(() => import("../../features/user/User"));
const PageNotFound = React.lazy(
  () => import("../../features/notFound/NotFound")
);

export const routes = {
  home: "/home",
  user: "/user",
  NOT_FOUND: "/404",
};

export const Routes = () => {
  return (
    <div>
      hello
      <Switch>
        <Route exact path="/home">
          <Redirect to={routes.home} />
        </Route>

        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.user} component={User} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
