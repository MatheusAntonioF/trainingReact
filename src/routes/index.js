import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Private from './private';

import * as pages from '../pages';

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={pages.SignIn} />
        <Private path="/dashboard" exact component={pages.Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

