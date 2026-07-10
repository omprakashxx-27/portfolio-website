import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-center text-5xl font-bold text-orange-500 mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="mailto:omprakashkhuntia27@gmail.com"
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-orange-500 transition"
          >
            <FaEnvelope className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-2">
              omprakashkhuntia27@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/omprakashxx-27"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-orange-500 transition"
          >
            <FaGithub className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold">GitHub</h3>
            <p className="text-gray-400 mt-2">
              github.com/omprakashxx-27
            </p>
          </a>

          <a
            href="https://linkedin.com/in/om-prakash-khuntia-49a543295"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-orange-500 transition"
          >
            <FaLinkedin className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400 mt-2">
              Connect with me
            </p>
          </a>

          <a
            href="#"
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-orange-500 transition"
          >
            <FaFileDownload className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold">Resume</h3>
            <p className="text-gray-400 mt-2">
              Download Resume
            </p>
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;