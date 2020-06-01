import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import USMap from "./components/map/Map";
import Nav from "./components/nav/Nav";
const Layout: AnyStyledComponent = styled.div`
  height: 100%;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 150px auto;
  grid-template-areas:
    "h"
    "m";
`;

const Header: AnyStyledComponent = styled.div`
  grid-area: h;
`;
const Map: AnyStyledComponent = styled.div`
  grid-area: m;
`;

export default () => {
  return (
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Map>
        <USMap />
      </Map>
    </Layout>
  );
};
