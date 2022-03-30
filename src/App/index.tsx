import React from "react";
import { Preview } from "./Preview";
import { PreviewWithEnv } from './PreviewWithEnv';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/env">
          <PreviewWithEnv />
        </Route>
        <Route path="/">
          <Preview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
