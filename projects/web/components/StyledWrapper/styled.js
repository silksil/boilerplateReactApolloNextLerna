import styled, { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family:${props => props.theme.fonts.primary};
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  button {  font-family: ${props => props.theme.fonts.primary} }
`;

export const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.primary.light};
`;
