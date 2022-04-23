import React from "react";
import InputSwitch from "react-input-switch";
import { useTheme } from "styled-components";

export const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const { background } = useTheme();

  return (
    <div style={{ float: "right" }}>
      <InputSwitch
        on={true}
        off={false}
        value={darkMode}
        onChange={setDarkMode}
        styles={{
          track: {
            backgroundColor: background.highlight,
          },
          trackChecked: {
            backgroundColor: background.highlight,
          },
          button: {
            backgroundColor: background.color,
          },
          buttonChecked: {
            backgroundColor: background.color,
          },
        }}
      />
    </div>
  );
};
