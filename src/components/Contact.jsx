import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    icon: FaEnvelope,
    color: "text-red-400",
    description: "omprakashkhuntia27@gmail.com",
    link: "mailto:omprakashkhuntia27@gmail.com",
  },
  {
    title: "WhatsApp",
    icon: FaWhatsapp,
    color: "text-green-500",
    description: "Chat with me instantly",
    link: "https://wa.me/917077724082?text=Hi%20Om,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    color: "text-white",
    description: "github.com/omprakashxx-27",
    link: "https://github.com/omprakashxx-27",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    color: "text-blue-500",
    description: "Let's Connect",
    link: "https://linkedin.com/in/om-prakash-khuntia-49a543295",
  },
  {
    title: "Resume",
    icon: FaFileDownload,
    color: "text-orange-500",
    description: "Download Resume",
    link: "/resume.pdf",
    download: true,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-10 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let's
            <span className="text-orange-500"> Connect</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg">
            I'm open to AI/ML internships, React development,
            collaborations and exciting opportunities.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {contacts.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.a
                key={item.title}
                href={item.link}
                target={item.download ? "_self" : "_blank"}
                rel="noreferrer"
                download={item.download}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-orange-500/20
                  hover:border-orange-500
                  p-8
                  duration-300
                  shadow-lg
                  hover:shadow-orange-500/20
                "
              >

                <Icon
                  className={`${item.color} text-5xl mb-6 group-hover:scale-110 duration-300`}
                />

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-3 break-words">
                  {item.description}
                </p>

              </motion.a>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Contact;