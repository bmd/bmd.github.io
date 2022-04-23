import styled, { css } from "styled-components";

const styledHeader = css`
  line-height: 1.2;
  color: ${(props) => props.theme.content.primary};
  &:before {
    color: ${({ theme }) => theme.content.secondary};
  }
  &::selection {
    background-color: ${({ theme }) => theme.background.highlight};
  }
`;

export const SectionHeader = styled.h1`
  ${styledHeader}
  font-size: 1.5rem;
  &:before {
    content: "# ";
  }
`;

export const SubHeader = styled.h2`
  ${styledHeader}
  font-size: 1.5rem;
  &:before {
    content: "## ";
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.content.primary};
  font-weight: 600;
  &::selection {
    background-color: ${({ theme }) => theme.background.highlight};
  }
`;

const styledHighlight = css`
  background-color: ${({ theme }) => theme.background.highlight};
  &::selection {
    background-color: ${({ theme }) => theme.background.highlight};
  }
  padding: 0 0.25rem 0 0.25rem;
`;

export const HighlightText = styled.span`
  ${styledHighlight}
  color: ${({ color }) => color};
`;

export const HighlightLink = styled.a`
  ${styledHighlight}
  color: ${(props) => props.color || props.theme.colors.orange};
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: none;
  }
  &:hover {
    text-decoration: overline;
  }
`;

export const Blink = styled.span`
  color: ${(props) => props.theme.content.secondary};
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

export const Strikethrough = styled.span`
  text-decoration: line-through;
`;
