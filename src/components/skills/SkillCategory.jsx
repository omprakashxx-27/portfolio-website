import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function SkillCategory({ category, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* Category Title */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[3px] w-14 bg-orange-500 rounded-full"></div>

        <h2 className="text-3xl font-bold text-white">
          {category}
        </h2>

        <div className="flex-1 h-[1px] bg-zinc-700"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;