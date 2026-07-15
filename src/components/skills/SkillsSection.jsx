import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import skills from "./skillsData";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white">
            Skills
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Technologies I use to build intelligent applications and
            modern web experiences.
          </p>
        </motion.div>

        {/* Categories */}
        {skills.map((category) => (
          <SkillCategory
            key={category.category}
            category={category.category}
            items={category.items}
          />
        ))}

      </div>
    </section>
  );
}

export default SkillsSection;