import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import EyeTrackingAvatar from "./EyeTrackingAvatar";

function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center w-full"
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.25}
        glareColor="#ffffff"
        glareBorderRadius="24px"
        scale={1.03}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1500}
        transitionSpeed={1800}
        className="rounded-3xl w-full max-w-[360px]"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.02,
          }}
          className="
            relative
            overflow-hidden
            w-full
            rounded-3xl
            bg-white/5
            backdrop-blur-2xl
            border border-orange-500/30
            shadow-[0_0_60px_rgba(249,115,22,.25)]
          "
        >
          {/* Orange Glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-0
              bg-orange-500/10
              blur-3xl
              pointer-events-none
            "
          />

          {/* Shine */}
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "250%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-0
              left-0
              w-24
              h-full
              bg-white/20
              blur-md
              rotate-12
              pointer-events-none
            "
          />

          <div className="relative z-10 p-6 sm:p-8">

            {/* Profile */}
            <div className="flex justify-center">
              <EyeTrackingAvatar />
            </div>

            {/* Name */}
            <h2
              className="
                text-center
                font-bold
                text-white
                mt-6
                text-2xl
                sm:text-3xl
              "
            >
              Om Prakash Khuntia
            </h2>

            {/* Role */}
            <p
              className="
                text-center
                text-orange-400
                mt-2
                font-medium
                text-base
                sm:text-lg
              "
            >
              AI / ML Engineer
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

            {/* Details */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">

              <div className="flex justify-between">
                <span>🎓 Year</span>
                <span>Final Year</span>
              </div>

              <div className="flex justify-between">
                <span>🏫 College</span>
                <span>GIFT Autonomous</span>
              </div>

              <div className="flex justify-between">
                <span>💼 Role</span>
                <span>AI / ML Engineer</span>
              </div>

              <div className="flex justify-between">
                <span>📍 Location</span>
                <span>Odisha, India</span>
              </div>

            </div>

          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}

export default FloatingCard;