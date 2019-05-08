import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App'

class Router extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/"
              render={(props) => <App {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Router;