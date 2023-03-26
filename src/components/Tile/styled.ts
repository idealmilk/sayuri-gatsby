import { motion } from "framer-motion";
import styled from "styled-components";

import { TileVariants } from ".";

export const Container = styled(motion.div)<TileVariants>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.colors[props.background]};
  color: ${(props) => props.text};

  .bottom-hover {
    transform: translateY(5rem);
  }

  .ticker-hover {
    transform: translateY(0);
  }

  .cursor {
    background-color: #111;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
  }

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: ${(props) => props.text};
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  }
`;

export const HoverWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  overflow: hidden;
  transition: transform 0.4s ease-in;
  transition-delay: 0.4s;
  transform: translateY(15rem);
  .ticker {
    width: 100vw;
  }
  p {
    font-size: 16rem;
    margin-right: 6rem;
    transform: translateY(-3rem);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.4s ease-in;

  .bottom {
    transform: translateY(0);
  }
`;
