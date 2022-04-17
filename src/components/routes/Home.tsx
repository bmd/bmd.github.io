import React from "react";
import styled, { useTheme } from "styled-components";

const SectionHeader = styled.h1`
  line-height: 1.2;
  color: ${({ color, theme }) => color || theme.colors.base02};
  &:before {
    content: "${({ prefix }) => prefix || "# "} ";
    color: ${({ theme }) => theme.colors.base0};
  }
`;

const HighlightText = styled.span`
  color: ${({ color, theme }) => color || theme.colors.base00};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.base2};
  padding: 0 0.25rem 0 0.25rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.base00};
  font-weight: 600;
`;

const HighlightLink = styled.a`
  color: ${(props) => props.color || props.theme.colors.orange};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.base2};
  padding: 0 0.25rem 0 0.25rem;
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    text-decoration: overline;
  }
`;

const Blink = styled.span`
  color: #a8a7a7;
  -webkit-animation: blink 1.25s step-end infinite;
  animation: blink 1.25s step-end infinite;

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Strikethrough = styled.span`
  text-decoration: line-through;
`;

export const Home = () => {
  const { yellow, blue } = useTheme().colors;

  return (
    <main>
      <section>
        <SectionHeader>Hi, I'm Brendan!</SectionHeader>
        <Text>
          I'm a <HighlightText color={yellow}>software engineer</HighlightText>,{" "}
          <HighlightText color={yellow}>leader</HighlightText>, and{" "}
          <HighlightText color={yellow}>dad</HighlightText> based in Boston, MA.
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
          <HighlightLink
            color={blue}
            target="_blank"
            href="https://www.linkedin.com/in/brendanmd/"
          >
            LinkedIn
          </HighlightLink>
          and my <HighlightLink href="/assets/resume.pdf">resume</HighlightLink>
          .
        </Text>
        <Text>
          My Github is{" "}
          <HighlightLink href="https://github.com/bmd/">@bmd</HighlightLink>,
          but I don't write much code outside of work these days. Having a
          toddler will do that to you.
        </Text>
      </section>
      <section>
        <SectionHeader>Todo List</SectionHeader>
        <Text>
          <ul>
            <li>🥚 Add easter egg </li>
            <li>
              <Strikethrough>🖱️ Fix cursor</Strikethrough>
            </li>
            <li>🌚 Dark mode!</li>
          </ul>
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

Home.exact = true;
Home.route = "/";
