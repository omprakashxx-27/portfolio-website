import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        group
        bg-zinc-900/70
        backdrop-blur-xl
        border
        border-orange-500/20
        hover:border-orange-500
        rounded-3xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-4
        shadow-lg
        hover:shadow-orange-500/30
        duration-300
        cursor-pointer
      "
    >
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.15,
        }}
      >
        <Icon
          size={60}
          color={skill.color}
        />
      </motion.div>

      <h3 className="text-white text-xl font-semibold text-center">
        {skill.name}
      </h3>

      <span className="text-sm text-orange-400 bg-orange-500/10 px-4 py-1 rounded-full">
        Experienced
      </span>
    </motion.div>
  );
}

export default SkillCard;