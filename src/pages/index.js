import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Publications from "./Publications";
import Work from "./Work";
import CV from "./CV";

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/Work">
          <Work user={user} />
        </Route>
        <Route exact path="/publications">
          <Publications user={user} />
        </Route>
        <Route exact path="/projects">
          <Projects user={user} />
        </Route>
        <Route exact path="/CV">
          <CV user={user} />
        </Route>

        <Route path="*">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
