import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Recommendation System",
    tech: ["Python", "NLP", "React"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    description:
      "A movie recommendation system using NLP and cosine similarity to recommend similar movies based on user selection.",
    github:
      "https://github.com/omprakashxx-27/movie_reco_sys_using_NLP",
    demo: "#",
  },

  {
    title: "Library Management System",
    tech: ["Java", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
    description:
      "A Java-based Library Management System to manage books, students and issue/return records efficiently.",
    github: "https://github.com/omprakashxx-27",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-orange-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured
            <span className="text-orange-500"> Projects</span>
          </h2>

          <p className="text-zinc-400 mt-5 text-base sm:text-lg">
            Some of my best work in AI, Machine Learning and Software
            Development.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border
                border-orange-500/20
                hover:border-orange-500
                duration-300
                shadow-xl
                hover:shadow-orange-500/20
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-56
                    sm:h-64
                    w-full
                    object-cover
                    group-hover:scale-110
                    duration-700
                  "
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-orange-500/10
                        border
                        border-orange-500/20
                        text-orange-400
                        text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <p className="text-zinc-400 leading-7 mt-6">
                  {project.description}
                </p>

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      justify-center
                      items-center
                      gap-2
                      bg-orange-500
                      hover:bg-orange-600
                      duration-300
                      rounded-xl
                      py-3
                      flex-1
                      font-semibold
                    "
                  >
                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      justify-center
                      items-center
                      gap-2
                      border
                      border-orange-500
                      hover:bg-orange-500
                      duration-300
                      rounded-xl
                      py-3
                      flex-1
                      font-semibold
                    "
                  >
                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;