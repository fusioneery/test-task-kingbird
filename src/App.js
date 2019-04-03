import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./styles/reset.sass";
import "./styles/main.sass";

import ErrorPage from "./pages/Error/ErrorContainer";
import { NotFoundPresentational } from "./pages/NotFound/NotFoundPresentational";
import Index from "./pages/Index/IndexContainer";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/error" component={ErrorPage} />
          <Route component={NotFoundPresentational} />
        </Switch>
      </Router>
    );
  }
}

export default App;
