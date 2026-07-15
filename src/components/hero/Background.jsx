import { motion } from "framer-motion";
import Particles from "./Particles";

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Orange Glow Top Left */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/20 blur-[120px]"
      />

      {/* Orange Glow Bottom Right */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-400/15 blur-[140px]"
      />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />
      <Particles />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
    </div>
  );
}

export default Background;