import React from "react";
import { motion } from "framer-motion";
import { Container, HamburgerMenu, HeaderInner, Logo, Nav } from "./styled";

const Header = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <HeaderInner>
        <Logo>Matthew Gilligan</Logo>
        <Nav>
          <li>
            <a href="/#">Projects</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </Nav>

        <HamburgerMenu>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </HeaderInner>
    </Container>
  );
};

export default Header;
