import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";

function CertificateModal({
  certificate,
  onClose,
  onNext,
  onPrev,
  current,
  total,
}) {

  useEffect(() => {
    const handleKey = (e) => {

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") onNext();

      if (e.key === "ArrowLeft") onPrev();

    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);

  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >

          {/* LEFT */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-8 text-white hover:text-orange-500"
          >
            <ChevronLeft size={45} />
          </button>

          {/* RIGHT */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-8 text-white hover:text-orange-500"
          >
            <ChevronRight size={45} />
          </button>

          {/* CLOSE */}

          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-orange-500"
          >
            <X size={35} />
          </button>

          {/* IMAGE */}

          <motion.img
            src={certificate.image}
            alt={certificate.title}
            initial={{
              scale: 0.8,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] rounded-xl shadow-2xl object-contain"
          />

          {/* FOOTER */}

          <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/90 border-t border-orange-500/20 px-12 py-5 flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold text-white">
                {certificate.title}
              </h2>

              <p className="text-orange-400">
                {certificate.issuer}
              </p>

            </div>

            <div className="flex items-center gap-6">

              <span className="text-zinc-400">

                {current} / {total}

              </span>

              <a
                href={certificate.image}
                download
                className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <Download size={18} />

                Download
              </a>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;