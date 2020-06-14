import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { useTransition, animated } from "react-spring";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "../button";

const pages = [
  ({ style }) => (
    <animated.div className="page page1" style={{ ...style }}>
      <div className="page-title">
        <div className="title1">Life with Scarf Mask</div>
        <div className="title2">Walk on the Wild Side.</div>
        <Button />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="page page2" style={{ ...style }}>
      <div className="page-title">
        <div className="title1">Life with Scarf Mask</div>
        <div className="title2">Walk on the Wild Side.</div>
        <Button color={"white"} />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="page page3" style={{ ...style }}>
      <div className="page-title">
        <div className="title1">Life with Scarf Mask</div>
        <div className="title2">Walk on the Wild Side.</div>
        <Button />
      </div>
    </animated.div>
  ),
];

function Carousel() {
  const [count, setCount] = useState(0);
  const [right, setRight] = useState(true);
  const timeId = useRef(null);
  useEffect(() => {
    timeId.current = setInterval(() => {
      setCount((count) => (count + 1) % 3);
    }, 4000);
  }, []);
  const handlePreClick = (e) => {
    e.preventDefault();
    setRight(false);
    setCount(count - 1 < 0 ? 2 : (count - 1) % 3);
    clearInterval(timeId.current);
    timeId.current = setInterval(() => {
      setRight(true);
      setCount((count) => (count + 1) % 3);
    }, 4000);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setRight(true);
    setCount((count + 1) % 3);
    clearInterval(timeId.current);
    timeId.current = setInterval(() => {
      setCount((count) => (count + 1) % 3);
    }, 4000);
  };
  const transitions = useTransition(
    count,
    (p) => p,
    right
      ? {
          from: { transform: "translate3d(100%,0,0)" },
          enter: { transform: "translate3d(0%,0,0)" },
          leave: { transform: "translate3d(-80%,0,0)" },
        }
      : {
          from: { transform: "translate3d(-100%,0,0)" },
          enter: { transform: "translate3d(0%,0,0)" },
          leave: { transform: "translate3d(80%,0,0)" },
        }
  );
  return (
    <div className="carousel">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
      <div className="control-btn">
        <div className="pre" onClick={handlePreClick}>
          <AiOutlineLeft />
        </div>
        <div className="next" onClick={handleNextClick}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
