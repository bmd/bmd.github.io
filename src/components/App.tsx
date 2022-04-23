import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes";
import settings from "../../settings";
import { light, dark } from "../themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { DarkModeToggle } from "./DarkModeButton";

export default function App() {
  const initialDarkModeState =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(initialDarkModeState);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyles />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <BrowserRouter basename={settings.repoPath}>
        <Switch>
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
