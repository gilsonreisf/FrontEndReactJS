import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Cadastro from './pages/Cadastro/index';
import Perfil from './pages/Perfil';
import main from './pages/main';
import HomePage from './pages/HomePage';

import { isAuthenticated, login } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {HomePage} />
        <Route path="/cadastro" component= {Cadastro}  />
        <PrivateRoute path="/api" component= {main}  />
        <Route path="/perfil" component= {Perfil} />
      </Switch>
    </BrowserRouter>
  );

/*
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/api" component={main}/>
                <Route path="/perfil" component={Perfil}/>
                
            </Switch>
        </BrowserRouter>
    );


};**/

export default Routes;