import React from "react";
import { Preview } from "./Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Preview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
