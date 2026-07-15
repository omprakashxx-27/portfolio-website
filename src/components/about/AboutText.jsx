import { motion } from "framer-motion";

function AboutText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      

    

      <h2 className="text-2xl text-orange-400 mt-4 font-semibold">
        AI / ML Engineer
      </h2>

      <p className="text-zinc-300 mt-8 leading-8 text-lg">
        Passionate about Artificial Intelligence, Machine Learning and
        Full Stack Development. I enjoy building intelligent software,
        modern web applications and solving real-world problems while
        continuously learning new technologies.
      </p>
    </motion.div>
  );
}

export default AboutText;