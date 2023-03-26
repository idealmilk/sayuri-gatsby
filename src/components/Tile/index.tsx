import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useRef, useState, MouseEvent } from "react";
import Ticker from "react-ticker";

import { Container, HoverWrap, Row } from "./styled";

export type TileVariants = {
  background: string;
  text: string;
  height: string;
  width: string;
};

type TileProps = {
  text: string;
  variants: TileVariants;
};

const Tile = ({ text, variants }: TileProps) => {
  const container = useRef<HTMLDivElement>(null);
  const hoverWrap = useRef<HTMLDivElement>(null);
  const bottomRow = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState(false);
  const [exitScale, setExitScale] = useState(1);

  const mouseEnter = () => {
    bottomRow.current?.classList.add("bottom-hover");
    hoverWrap.current?.classList.add("ticker-hover");

    setIsShown(true);
  };

  const mouseLeave = () => {
    hoverWrap.current?.classList.remove("ticker-hover");
    setTimeout(() => bottomRow.current?.classList.remove("bottom-hover"), 1000);
    setTimeout(() => setIsShown(false), 1000);
  };

  const handleExit = () => {
    if (container.current) {
      container.current.style.zIndex = "100000";
    }
    setExitScale(8);
  };

  return (
    <Container
      as={motion.div}
      ref={container}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
      onClick={() => handleExit()}
      background={variants.background}
      text={variants.text}
      height={variants.height}
      width={variants.width}
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        scale: exitScale,
      }}
      transition={{
        ease: "easeInOut",
        delay: 0.6,
        duration: 1,
      }}
    >
      <Link to="/about">
        <Row>
          <p>Development</p>
          <p>2023</p>
        </Row>
        <Row className="bottom" ref={bottomRow}>
          <p>{text}</p>
          <p>01</p>
        </Row>
        <HoverWrap ref={hoverWrap}>
          <Ticker speed={10} move={isShown}>
            {() => <p>{text}</p>}
          </Ticker>
        </HoverWrap>
      </Link>
    </Container>
  );
};

export default Tile;