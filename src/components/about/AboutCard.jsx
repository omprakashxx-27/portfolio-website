import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-zinc-900/70 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        Education
      </h2>

      <div className="space-y-6">

        <div className="flex gap-4">
          <GraduationCap className="text-orange-500" />
          <div>
            <h3 className="text-white font-semibold">
              Final Year B.Tech
            </h3>

            <p className="text-zinc-400">
              Computer Science & Engineering (AI)
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          🏫
          <div>
            <p className="text-white">
              GIFT Autonomous
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin className="text-orange-500" />
          <p className="text-white">
            Odisha, India
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default AboutCard;