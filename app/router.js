import React, { Fragment } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

import Datepicker from "./pages/Masters/Datepicker";
// import Table from '../pages/Masters/Table';



function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={BasicLayout} />
          <Route path="/table" component={Datepicker} />

          
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;
