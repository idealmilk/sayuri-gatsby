import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { motion, AnimatePresence } from "framer-motion";

type DraggableProps = {
  image: string;
};

const Draggable = ({ image }: DraggableProps) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const x = Math.random() * (window.innerWidth - 200);
      const y = Math.random() * (3 * window.innerHeight - 200);
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    }
  }, []);

  const [{ x, y }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 1, tension: 300, friction: 30 },
  }));

  const bind = useDrag((params) => {
    set({ x: params.offset[0], y: params.offset[1] });
  });

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: Math.random() * 1 + 1.6 }}
    >
      <AnimatePresence>
        <animated.img
          ref={ref}
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
