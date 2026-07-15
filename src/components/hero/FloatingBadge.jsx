import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import Lanyard from "./Lanyard";

function FloatingBadge() {
  return (
    <motion.div
      className="relative flex justify-center"
      animate={{
        rotate: [-8, 8, -8],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "top center",
      }}
    >
      <Lanyard />

      <div className="pt-40">
        <FloatingCard />
      </div>
    </motion.div>
  );
}

export default FloatingBadge;