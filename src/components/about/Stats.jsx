import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    title: "Projects",
  },
  {
    number: "15+",
    title: "Certificates",
  },
  {
    number: "10+",
    title: "Technologies",
  },
];

function Stats() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-8">

      {stats.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{
            scale: 1.05,
          }}
          className="bg-zinc-900/70 backdrop-blur-xl border border-orange-500/20 rounded-2xl py-8 text-center"
        >
          <h2 className="text-4xl font-bold text-orange-500">
            {item.number}
          </h2>

          <p className="text-zinc-300 mt-3">
            {item.title}
          </p>

        </motion.div>
      ))}

    </div>
  );
}

export default Stats;