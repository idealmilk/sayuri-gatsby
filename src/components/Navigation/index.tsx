import React from "react";
import { Link } from "gatsby";

import { Container, TileWrap } from "./styled";
import Tile from "components/Tile";

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  return (
    <Container>
      <TileWrap>
        <Tile
          text="New Edge Studio"
          variants={{
            background: "yellow",
            text: "black",
            height: "65vh",
            width: "35vw",
          }}
        />
        <Tile
          text="The Glow"
          variants={{
            background: "red",
            text: "white",
            height: "35vh",
            width: "45vw",
          }}
        />
        <Tile
          text="SciLeads"
          variants={{
            background: "blue",
            text: "white",
            height: "50vh",
            width: "25.4vw",
          }}
        />
      </TileWrap>
    </Container>
  );
};

export default Navigation;
