import React,  from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const routes = {
    counter: '/counter',
    movies: '/movies',
    forms: '/forms',
    formHook: '/formHook',
    NOT_FOUND: '/404',
  };

export const Routes = () => {
    return (
        <Switch>
      <Route exact path="/">
        <Redirect to={routes.counter} />
      </Route>
      <Route exact path={routes.counter} component={Counter} />
      <Route path={routes.movies} component={Movies} />
      <Route path={routes.forms} component={FormikContacts} />
      <Route path={routes.formHook} component={HookForm} />
      <Route component={PageNotFound} />
    </Switch>
    )
}


