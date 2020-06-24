import React from "react";
import { Route, Redirect } from "react-router";
import { HashRouter, Switch } from "react-router-dom";

import Home from "../page/Home";
import Article from "../page/Article";
import Header from "../component/Header";
import Nav from "../component/Nav";
const Routes = () => (
  <HashRouter>
    <Header />
    <Nav />
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home/:id?" component={Home} />
        <Route path="/article/:id/:slug" component={Article} />
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
