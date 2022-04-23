import React, { useState } from "react";
import { useTheme } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

import {
  Blink,
  HighlightLink,
  HighlightText,
  SectionHeader,
  Text,
} from "../typography";
import { RouteComponentProps } from "react-router-dom";

interface IHomePageProps {
  setDarkMode: any;
}

export const Home = (props: RouteComponentProps<{}> & IHomePageProps) => {
  const { yellow } = useTheme().colors;

  return (
    <main>
      <section>
        <SectionHeader>Hi, I'm Brendan!</SectionHeader>
        <Text>
          I'm a <HighlightText color={yellow}>software engineer</HighlightText>,{" "}
          <HighlightText color={yellow}>leader</HighlightText>, and{" "}
          <HighlightText color={yellow}>dad</HighlightText> in Boston, MA.
        </Text>
        <Text>
          I'm currently Director of Product Engineering at{" "}
          <HighlightLink href="https://logrocket.com">LogRocket</HighlightLink>.
          I also co-host LogRocket's engineering podcast,{" "}
          <HighlightLink href="https://podrocket.logrocket.com/hosts/brendan-downing">
            PodRocket
          </HighlightLink>
          .
        </Text>
        <Text>
          If you're looking for more information about my work, here is my{" "}
          <HighlightLink href="https://www.linkedin.com/in/brendanmd/">
            LinkedIn
          </HighlightLink>{" "}
          profile and my{" "}
          <HighlightLink target="_blank" href="/assets/resume.pdf">
            resume
          </HighlightLink>
          .
        </Text>
        <Text>
          My Github is{" "}
          <HighlightLink href="https://github.com/bmd/">@bmd</HighlightLink>,
          but with a toddler running around, I don't write much code outside of
          work these days.
        </Text>
      </section>
      <section>
        <h1>
          <Blink>▍</Blink>
        </h1>
      </section>
    </main>
  );
};
