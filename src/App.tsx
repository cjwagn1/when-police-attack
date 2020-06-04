import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import MainContent from "./components/common/MainContent";
const Layout: AnyStyledComponent = styled.div`
  height: 100%;
  display: grid;
  margin: 0;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 0px 100vh;
  grid-template-areas:
    "h"
    "m";
`;

const Header: AnyStyledComponent = styled.div`
  background-color: #dfe4ec;
  height: auto;
  width: 100%;
  position: fixed;
`;
const Content: AnyStyledComponent = styled.div`
  grid-area: m;
  background-color: green;
`;

export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Content>
          <MainContent />
        </Content>
      </Layout>
    </BrowserRouter>
  );
};
