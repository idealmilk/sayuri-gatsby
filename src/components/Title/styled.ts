import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

type CardProps = {
  detail?: boolean;
};

export const Card = styled(motion.div)<CardProps>`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 40rem;
  justify-content: center;
  align-items: center;
  z-index: 0;

  h1 {
    font-size: 5rem;
    cursor: pointer;
    /* margin-top: ${(props) => (props.detail ? "9rem" : 0)}; */
  }

  p {
    width: 86%;
    margin: 0auto;
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const Links = styled(motion.div)`
  display: flex;
  margin-top: 1rem;
  a {
    color: black;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.6rem;
  }
`;
