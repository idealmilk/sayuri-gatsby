import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Container, Card, Links } from "./styled";

const Title = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <ReactCardFlip isFlipped={isFlipped}>
          <Card>
            <h1
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ writingMode: "vertical-rl" }}
            >
              室岡小百合
            </h1>
          </Card>
          <Card detail={true}>
            <h1 onClick={() => setIsFlipped(!isFlipped)}>Sayuri Murooka</h1>
            <p>Sayuri Murooka is a Tokyo-based photographer.</p>
            <p>She is represented by SIGNO.</p>

            <Links>
              <a
                href="https://www.instagram.com/sayuri.murooka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="manami@signo-tokyo.co.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </Links>
          </Card>
        </ReactCardFlip>
      </motion.div>
    </Container>
  );
};

export default Title;
