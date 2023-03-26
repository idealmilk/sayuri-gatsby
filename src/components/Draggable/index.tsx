import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { motion, AnimatePresence } from "framer-motion";

type DraggableProps = {
  image: string;
};

const Draggable = ({ image }: DraggableProps) => {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - 200),
    y: Math.random() * (3 * window.innerHeight - 200),
  });

  const [{ x, y }, set] = useSpring(() => ({
    x: position.x,
    y: position.y,
    config: { mass: 1, tension: 300, friction: 30 },
  }));

  const bind = useDrag(({ offset: [dx, dy] }) => {
    set({ x: position.x + dx, y: position.y + dy });
  });

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: Math.random() * 1 + 1.6 }}
    >
      <AnimatePresence>
        <animated.img
          src={image}
          alt="Draggable Image"
          style={{
            position: "absolute",
            width: "30rem",
            top: y,
            left: x,
            cursor: "grab",
            touchAction: "none",
          }}
          draggable="false"
          {...bind()}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Draggable;
