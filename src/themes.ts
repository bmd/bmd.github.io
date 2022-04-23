import { DefaultTheme } from "styled-components";

// Design based on:
// http://www.zovirl.com/2011/07/22/solarized_cheat_sheet/

const backgroundTones = {
  base03: "#002b36",
  base02: "#073642",
  base2: "#EEE8D5",
  base3: "#FDF6E3",
};

const contentTones = {
  base01: "#073642",
  base00: "#657B83",
  base0: "#839496",
  base1: "#93A1A1",
};

const colors = {
  yellow: "#B58900",
  orange: "#CB4B16",
  red: "#DC322F",
  magenta: "#D33682",
  violet: "#6C71C4",
  blue: "#268BD2",
  cyan: "#2AA198",
  green: "#859900",
};

export const light: DefaultTheme = {
  background: {
    color: backgroundTones.base3,
    highlight: backgroundTones.base2,
  },
  content: {
    primary: contentTones.base00,
    secondary: contentTones.base1,
    emphasized: "black",
  },
  colors,
};

export const dark: DefaultTheme = {
  background: {
    color: backgroundTones.base03,
    highlight: backgroundTones.base02,
  },
  content: {
    primary: contentTones.base0,
    secondary: contentTones.base01,
    emphasized: contentTones.base1,
  },
  colors,
};
