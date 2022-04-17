import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    base00: "#657B83",
    base01: "#586E75",
    base02: "#073642",
    base03: "#002B36",
    base0: "#839496",
    base1: "#93A1A1",
    base2: "#EEE8D5",
    base3: "#FDF6E3",
    yellow: "#b58900",
    orange: "#CB4B16",
    red: "#DC322F",
    magenta: "#D33682",
    violet: "#6C71C4",
    blue: "#268BD2",
    cyan: "#2AA198",
    green: "#859900",
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
