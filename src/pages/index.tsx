import type { PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import One from "images/photos/1.webp";
import Two from "images/photos/2.webp";
import Three from "images/photos/3.webp";
import Four from "images/photos/4.webp";
import Five from "images/photos/5.webp";
import Six from "images/photos/6.webp";
import Seven from "images/photos/7.webp";
import Eight from "images/photos/8.webp";
import Nine from "images/photos/9.webp";
import Ten from "images/photos/10.webp";
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
