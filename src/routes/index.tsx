import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  RouteProps as ReactRouterRouteProps,
  Redirect,
  useLocation,
} from 'react-router-dom';

import EditDragon from '../page/EditDragon';
import ListDragon from '../page/ListDragon';
import Login from '../page/Login';
import NotFound from '../page/NotFound';
import ViewDragon from '../page/ViewDragon';
import { isAuthenticated } from '../services/auth';
import AddDragon from './../page/AddDragon';

interface RouterProps extends ReactRouterRouteProps {
  component: React.ComponentType;
  onChange?: any;
}

const PrivateRoute = ({ component: Component, ...rest }: RouterProps) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...rest} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute
        path="/listar-dragoes/visualizar-dragao/:id"
        exact
        component={ViewDragon}
      />
      <PrivateRoute
        path="/listar-dragoes/cadastrar-dragao"
        exact
        component={AddDragon}
      />
      <PrivateRoute path="/listar-dragoes" exact component={ListDragon} />
      <PrivateRoute
        path="/listar-dragoes/editar-dragao/:id"
        exact
        component={EditDragon}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default Routes;
