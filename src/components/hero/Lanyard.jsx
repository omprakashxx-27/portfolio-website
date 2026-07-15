import { motion } from "framer-motion";

function Lanyard() {
  return (
    <motion.div
      className="absolute -top-72 left-1/2 -translate-x-1/2 z-20"
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "bottom center",
      }}
    >
      {/* Left Strap */}
      <div
        className="absolute h-72 w-4 rounded-full
        bg-gradient-to-b
        from-orange-300
        via-orange-500
        to-orange-700
        shadow-[0_0_15px_rgba(249,115,22,.4)]"
        style={{
          transform: "rotate(24deg)",
          left: "-42px",
        }}
      />

      {/* Right Strap */}
      <div
        className="absolute h-72 w-4 rounded-full
        bg-gradient-to-b
        from-orange-300
        via-orange-500
        to-orange-700
        shadow-[0_0_15px_rgba(249,115,22,.4)]"
        style={{
          transform: "rotate(-24deg)",
          right: "-42px",
        }}
      />

      {/* Ring */}
      <div className="absolute top-[270px] left-1/2 -translate-x-1/2
      w-8 h-8 rounded-full border-4 border-gray-300 bg-zinc-900" />

      {/* Hook */}
      <div className="absolute top-[300px] left-1/2 -translate-x-1/2
      w-3 h-10 rounded-full bg-gray-300" />
    </motion.div>
  );
}

export default Lanyard;