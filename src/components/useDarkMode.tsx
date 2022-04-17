import { useEffect, useState } from "react";

const enum Mode {
  Light = "LIGHT",
  Dark = "DARK",
}

export const useDarkMode = () => {
  const [mode, setMode] = useState(Mode.Light);
};
