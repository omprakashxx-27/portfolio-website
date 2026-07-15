import { motion } from "framer-motion";

function HeroText() {
  return (
    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

      {/* Hello */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          uppercase
          tracking-[0.25em]
          text-orange-500
          font-semibold
          mb-4
          text-sm
          sm:text-base
        "
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          font-black
          leading-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        OM PRAKASH
        <br />
        KHUNTIA
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          text-orange-500
          font-semibold
          mt-5
          text-xl
          sm:text-2xl
          md:text-3xl
        "
      >
        AI / ML Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        className="
          mt-6
          text-zinc-300
          leading-7
          sm:leading-8
          text-base
          sm:text-lg
          px-2
          lg:px-0
        "
      >
        Building intelligent software using React,
        Python & Machine Learning.

        <br className="hidden sm:block" />

        Passionate about solving real-world
        problems through AI-powered applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
        }}
        className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          lg:justify-start
        "
      >
        <a
          href="/resume.pdf"
          download
          className="
            px-7
            py-3
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition
            text-center
            font-semibold
          "
        >
          Resume
        </a>

        <a
          href="https://github.com/omprakashxx-27"
          target="_blank"
          rel="noreferrer"
          className="
            px-7
            py-3
            rounded-xl
            border
            border-orange-500
            hover:bg-orange-500
            transition
            text-center
            font-semibold
          "
        >
          GitHub
        </a>

        <a
          href="linkedin.com/in/om-prakash-khuntia-49a543295"
          target="_blank"
          rel="noreferrer"
          className="
            px-7
            py-3
            rounded-xl
            border
            border-white/20
            hover:border-orange-500
            transition
            text-center
            font-semibold
          "
        >
          LinkedIn
        </a>
      </motion.div>

    </div>
  );
}

export default HeroText;