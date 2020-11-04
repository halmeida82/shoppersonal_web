import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';

import Store from "./containers/Store/Store";
import Shoppers from "./containers/Shoppers/Shoppers";
import Reports from "./containers/Reports/Reports";
import Configuration from "./containers/Configuration/Configuration";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import { getTheme } from "./containers/Configuration/configurationsReducer";

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

export default function App() {

  const theTheme = useSelector(getTheme);

     return (
      <MuiThemeProvider theme={createMuiTheme(theTheme)}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <DashboardRoute path="/dashboard" component={Store} />
              <DashboardRoute path="/shoppers" component={Shoppers} />
              <DashboardRoute path="/reports" component={Reports} />
              <DashboardRoute path="/configuration" component={Configuration} />
              <DashboardRoute exact path="/" component={Store} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
};