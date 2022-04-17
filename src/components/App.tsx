import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes";
import settings from "../../settings";
import "./App.css";
import { Theme } from "../Theme";

export default function App() {
  return (
    <Theme>
      <BrowserRouter basename={settings.repoPath}>
        <Switch>
          <Route exact={Home.exact} path={Home.route} component={Home} />
        </Switch>
      </BrowserRouter>
    </Theme>
  );
}
