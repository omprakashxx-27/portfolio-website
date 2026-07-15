import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

function MouseTrail() {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: {
      tension: 250,
      friction: 30,
    },
  }));

  useEffect(() => {
    const move = (e) => {
      api.start({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [api]);

  return (
    <animated.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-4 h-4 rounded-full bg-orange-400 shadow-[0_0_25px_8px_rgba(249,115,22,.8)]" />
    </animated.div>
  );
}

export default MouseTrail;