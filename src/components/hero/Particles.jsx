import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, i) => {

        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 8;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: "-20px",
              opacity: 0.5,
            }}
            animate={{
              y: [-20, -900],
              opacity: [0, 0.7, 0],
              x: [0, Math.random() * 60 - 30],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}

export default Particles;