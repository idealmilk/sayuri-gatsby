import type { PageProps } from "gatsby";
import React from "react";

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
import DraggableImage from "components/Draggable";
import Title from "components/Title";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Title />
      <main style={{ minHeight: "calc(300vh) + 300px" }}>
        <DraggableImage image={One} />
        <DraggableImage image={Two} />
        <DraggableImage image={Three} />
        <DraggableImage image={Four} />
        <DraggableImage image={Five} />
        <DraggableImage image={Six} portrait={true} />
        <DraggableImage image={Seven} />
        <DraggableImage image={Eight} portrait={true} />
        <DraggableImage image={Nine} portrait={true} />
        <DraggableImage image={Ten} />
      </main>
    </>
  );
};

export default IndexPage;
