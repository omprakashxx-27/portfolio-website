import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "AI/ML Internship",
    org: "CTTC Bhubaneswar",
  },
  {
    title: "Certificate Coming Soon",
    org: "Upload Later",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#0d0d0d] text-white py-24 px-6"
    >
      <h2 className="text-center text-5xl font-bold text-orange-500 mb-16">
        Certificates
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {certificates.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-700 hover:border-orange-500 transition"
          >
            <FaCertificate className="text-5xl text-orange-500 mb-5" />

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.org}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Certificates;