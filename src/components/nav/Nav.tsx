import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import { Icon } from "@material-ui/core";
const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title: AnyStyledComponent = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;
const ButtonText: AnyStyledComponent = styled.div`
  display: inline;
  padding-left: 5px;
`;
const Center: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
`;
const Button: AnyStyledComponent = styled.div`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  margin: 5px;
  padding: 5px;
  color: black;
  user-select: none;
  background: #dfe4ec,
  transition: "all 0.17s ease-in-out",
  border-radius: 50px;
  width: 120px;
  cursor: pointer;
  text-align: center;
`;
const VCenter: AnyStyledComponent = styled.div`
  vertical-align: middle;

  display: inline;
`;

export default () => {
  const loc = useLocation();

  const MapStyle = {
    borderRadius: "10px",
    paddingTop: "4px",
    boxShadow: "5px 5px 10px #bec2c9, -5px -5px 10px #ffffff",
  };
  const VideoStyle = {
    borderRadius: "10px",
    paddingTop: "4px",
    boxShadow: "5px 5px 10px #bec2c9, -5px -5px 10px #ffffff",
  };

  if (loc.pathname === "/map") {
    MapStyle.boxShadow = "inset 5px 5px 10px #bec2c9, -5px -5px 10px #ffffff";
  } else if (loc.pathname === "/video") {
    VideoStyle.boxShadow = "inset 5px 5px 10px #bec2c9, -5px -5px 10px #ffffff";
  }

  return (
    <div>
      <Constraint>
        <Title>When Police Attack</Title>
        <Center>
          <Link to="/map">
            <Button>
              <div style={MapStyle}>
                <VCenter>
                  <Icon component={RoomIcon} />
                </VCenter>

                <ButtonText>Map</ButtonText>
              </div>
            </Button>
          </Link>
          <Link to="/video">
            <Button>
              <div style={VideoStyle}>
                <VCenter>
                  <Icon component={VideoLabelIcon} />
                </VCenter>
                <ButtonText>Video</ButtonText>
              </div>
            </Button>
          </Link>
        </Center>
      </Constraint>
    </div>
  );
};
