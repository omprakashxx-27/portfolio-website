import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

function EyeTrackingAvatar() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}
      className="relative flex justify-center"
    >
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-orange-500 shadow-[0_0_35px_rgba(249,115,22,.5)]"
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-orange-500/20
          blur-2xl
          -z-10
        "
      />
    </motion.div>
  );
}

export default EyeTrackingAvatar;