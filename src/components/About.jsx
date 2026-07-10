import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-5xl font-bold text-center text-orange-500 mb-14">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500 transition duration-300">
            <FaGraduationCap className="text-5xl text-orange-500 mb-5" />

            <h3 className="text-2xl font-bold mb-4">
              Final Year B.Tech CSE (AI)
            </h3>

            <p className="text-gray-300 leading-8">
              I'm Om Prakash Khuntia, a Final Year Computer Science
              Engineering (Artificial Intelligence) student passionate
              about building intelligent applications using Artificial
              Intelligence, Machine Learning, React and Python.
            </p>
          </div>

          {/* Right Card */}
          <div className="space-y-6">

            <div className="bg-zinc-900 p-6 rounded-3xl border border-orange-500/30 hover:scale-105 transition">
              <FaBrain className="text-4xl text-orange-500 mb-4" />

              <h3 className="text-xl font-bold">
                AI / ML Enthusiast
              </h3>

              <p className="text-gray-400 mt-2">
                Passionate about NLP, Machine Learning,
                Deep Learning and solving real-world problems.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-orange-500/30 hover:scale-105 transition">
              <FaLaptopCode className="text-4xl text-orange-500 mb-4" />

              <h3 className="text-xl font-bold">
                AI/ML Intern
              </h3>

              <p className="text-gray-400 mt-2">
                Completed AI/ML Internship at
                Central Tool Room & Training Centre (CTTC),
                Bhubaneswar.
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;