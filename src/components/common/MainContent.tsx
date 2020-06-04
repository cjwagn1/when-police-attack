import React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import Map from "../map/Map";
import Video from "../videos/Video";

const Layout: AnyStyledComponent = styled.div``;

const NotFound: React.FC<{}> = (): JSX.Element => {
  return <h1>You are lost!</h1>;
};

export default () => {
  return (
    <Switch>
      <Route exact={true} path="/map" component={Map} />
      <Route path="/video" component={Video} />

      <Route component={NotFound} />
    </Switch>
  );
};
