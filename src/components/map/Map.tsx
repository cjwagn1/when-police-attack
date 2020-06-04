import React from "react";
import GoogleMapReact from "google-map-react";
import styled, { AnyStyledComponent } from "styled-components";
const Layout: AnyStyledComponent = styled.div``;

export default () => {
  const test = {
    center: { lat: 37.6872, lng: -97.3301 },
    zoom: 5,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key:  }}
        defaultCenter={test.center}
        defaultZoom={test.zoom}
      ></GoogleMapReact>
    </div>
  );
};
