import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 w-56 h-56 rounded-full"
      animate={{
        x: position.x - 112,
        y: position.y - 112,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
      style={{
        background:
          "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0) 70%)",
      }}
    />
  );
}

export default MouseGlow;