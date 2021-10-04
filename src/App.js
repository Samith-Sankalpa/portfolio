import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
