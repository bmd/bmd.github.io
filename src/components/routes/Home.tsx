import React, { useState } from "react";
import { useTheme } from "styled-components";

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
          <HighlightText color={yellow}>dad</HighlightText> based outside of
          Boston.
        </Text>
        <Text>
          I'm currently a sr. engineering manager at{" "}
          <HighlightLink href="https://www.zillowhomeloans.com/">
            Zillow
          </HighlightLink>
          , building software to improve the consumer mortgage experience.
        </Text>
        <Text>
          Previously, I was a director of engineering at{" "}
          <HighlightLink href="https://logrocket.com">LogRocket</HighlightLink>{" "}
          and{" "}
          <HighlightLink href="https://bluestate.co">
            Blue State Digital
          </HighlightLink>
          . I also co-hosted LogRocket's engineering podcast,{" "}
          <HighlightLink href="https://podrocket.logrocket.com/hosts/brendan-downing">
            PodRocket
          </HighlightLink>
          .
        </Text>
        <Text>
          You can find me on{" "}
          <HighlightLink href="https://www.linkedin.com/in/brendanmd/">
            LinkedIn
          </HighlightLink>
          , or on Github{" "}
          <HighlightLink href="https://github.com/bmd/">@bmd</HighlightLink>.
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
