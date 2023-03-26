import { motion } from "framer-motion";
import React from "react";

import { Container } from "./styled";

const Title = () => {
  return (
    <Container>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Sayuri Murooka
      </motion.h1>
    </Container>
  );
};

export default Title;
