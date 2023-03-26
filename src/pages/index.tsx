import type { PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import One from "images/photos/1.png";
import Two from "images/photos/2.png";
import Three from "images/photos/3.png";
import Four from "images/photos/4.png";
import Five from "images/photos/5.png";
import Six from "images/photos/6.png";
import Seven from "images/photos/7.png";
import Eight from "images/photos/8.png";
import Nine from "images/photos/9.png";
import Ten from "images/photos/10.png";
import Draggable from "components/Draggable";
import Title from "components/Title";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={{ minHeight: "300vh" }}>
      <Draggable image={One} />
      <Draggable image={Two} />
      <Draggable image={Three} />
      <Draggable image={Four} />
      <Draggable image={Five} />
      <Draggable image={Six} />
      <Draggable image={Seven} />
      <Draggable image={Eight} />
      <Draggable image={Nine} />
      <Draggable image={Ten} />
      <Title />
    </main>
  );
};

export default IndexPage;
