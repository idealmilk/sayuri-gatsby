import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, BannerRow, RowCol, RowTitle, RowLetter } from "./styled";

const banner = {
  animate: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

type AnimatedLettersProps = {
  title: string;
  disabled?: boolean;
};

const AnimatedLetters = ({ title, disabled }: AnimatedLettersProps) => (
  <RowTitle
    as={motion.div}
    variants={disabled ? {} : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <RowLetter as={motion.span} variants={disabled ? {} : letterAni}>
        {letter}
      </RowLetter>
    ))}
  </RowTitle>
);

const Banner = () => {
  return (
    <Container as={motion.div} variants={banner}>
      <BannerRow>
        <RowCol>
          <AnimatedLetters title="Frontend" />
        </RowCol>
        {/* <RowCol
          as={motion.div}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
        >
          <span className="row-message">
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </RowCol> */}
      </BannerRow>
      <BannerRow style={{ marginTop: "-7rem" }}>
        <RowCol>
          <AnimatedLetters title="Engineer" />
        </RowCol>
      </BannerRow>
    </Container>
  );
};

export default Banner;
