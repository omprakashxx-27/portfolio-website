import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMysql,
  SiTensorflow,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={45} /> },
  { name: "Java", icon: <FaJava size={45} /> },
  { name: "React", icon: <FaReact size={45} /> },
  { name: "JavaScript", icon: <SiJavascript size={45} /> },
  { name: "HTML5", icon: <FaHtml5 size={45} /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} /> },
  { name: "MySQL", icon: <SiMysql size={45} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={45} /> },
  { name: "Git", icon: <FaGitAlt size={45} /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-bold text-orange-500 mb-16"
      >
        Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
            }}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col items-center hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            <div className="text-orange-500 mb-5">
              {skill.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {skill.name}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;