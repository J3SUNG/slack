import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" Component={Login} />
      <Route path="/signUp" Component={SignUp} />
      <Route path="/workspace/:workspace" Component={Workspace} />
    </Switch>
  );
};

export default App;
