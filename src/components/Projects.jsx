import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Recommendation System",
    tech: "Python • NLP • React",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    description:
      "A movie recommendation system using NLP and cosine similarity to suggest similar movies based on user selection.",
    github: "https://github.com/omprakashxx-27/movie_reco_sys_using_NLP",
    demo: "#",
  },
  {
    title: "Library Management System",
    tech: "Java • MySQL",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
    description:
      "A Java-based Library Management System for managing books, students and issue/return records.",
    github: "https://github.com/omprakashxx-27",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d0d0d] text-white py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center text-orange-500 mb-16">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="text-orange-400 mt-2">
                {project.tech}
              </p>

              <p className="text-gray-400 mt-5 leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-orange-500 px-5 py-3 rounded-lg hover:bg-orange-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 border border-orange-500 px-5 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;