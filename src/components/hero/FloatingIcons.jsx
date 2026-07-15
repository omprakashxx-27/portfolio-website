import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiJavascript,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    top: "12%",
    left: "8%",
    delay: 0,
  },
  {
    Icon: FaPython,
    top: "70%",
    left: "10%",
    delay: 1,
  },
  {
    Icon: SiTensorflow,
    top: "25%",
    right: "8%",
    delay: 2,
  },
  {
    Icon: SiJavascript,
    top: "78%",
    right: "15%",
    delay: 3,
  },
  {
    Icon: FaGitAlt,
    top: "48%",
    left: "3%",
    delay: 4,
  },
];

function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, ...item }, index) => (
        <motion.div
          key={index}
          className="absolute text-orange-500/60 text-5xl"
          style={item}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}

export default FloatingIcons;