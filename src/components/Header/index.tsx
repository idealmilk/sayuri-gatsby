import React from "react";
import { motion } from "framer-motion";

import { Container, HamburgerMenu, HeaderInner, Logo, Nav } from "./styled";
import { Link } from "gatsby";

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
        <Logo>
          <Link to="/">Matthew Gilligan</Link>
        </Logo>
        <Nav>
          <a href="#about">About</a>
          <a href="#about">About</a>
          <a href="#about">About</a>
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
