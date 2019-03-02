import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import { LocalStateButton } from "./testLocalState";
import theme from "@benjaminf/theme";
import { Inner } from "./styled";
import { StyledPage } from "./styled";
import { ThemeProvider } from "styled-components";

export default class StyledWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <LocalStateButton />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
