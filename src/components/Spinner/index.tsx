import CircleType from "circletype";
import React, { useEffect, useRef } from "react";
import { SpinnerWrap } from "./styled";

type SpinnerProps = {
  text: String;
};

const Spinner = ({ text }: SpinnerProps) => {
  const circleInstance = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    new CircleType(circleInstance.current).radius(40);

    circleInstance.current?.classList.add("circle-wrap");

    circleInstance.current?.children[0].classList.add("circle");

    window.addEventListener("scroll", function () {
      if (circleInstance.current) {
        (circleInstance.current.children[0] as HTMLElement).style.transform =
          "rotate(" + window.scrollY * 0.15 + "deg)";
      }
    });
  }, []);

  return (
    <SpinnerWrap>
      <div ref={circleInstance}>{text}</div>
    </SpinnerWrap>
  );
};

export default Spinner;
