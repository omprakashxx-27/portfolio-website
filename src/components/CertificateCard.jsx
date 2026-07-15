import { motion } from "framer-motion";

function CertificateCard({ certificate }) {
  return (
    <motion.div
      
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}

      className="
      group
      block
      bg-zinc-900/70
      backdrop-blur-xl
      rounded-3xl
      overflow-hidden
      border
      border-orange-500/20
      hover:border-orange-500
      shadow-xl
      hover:shadow-orange-500/30
      duration-300
      "
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="
        h-56
        w-full
        object-cover
        group-hover:scale-110
        duration-500
        "
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {certificate.title}
        </h3>

        <p className="text-orange-400 mt-2">
          {certificate.issuer}
        </p>

        <p className="text-zinc-400 mt-4">
          {certificate.year}
        </p>
      </div>
    </motion.div>
  );
}

export default CertificateCard;