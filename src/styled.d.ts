import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color?: string;
    background: {
      color: string;
      highlight: string;
    };
    content: {
      primary: string;
      secondary: string;
      emphasized: string;
    };
    colors: {
      yellow: string;
      orange: string;
      red: string;
      magenta: string;
      violet: string;
      blue: string;
      cyan: string;
      green: string;
    };
  }
}
