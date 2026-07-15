import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black border-t border-orange-500/20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* Name */}

        <h2 className="text-3xl font-bold text-center text-orange-500">
          Om Prakash Khuntia
        </h2>

        {/* Subtitle */}

        <p className="text-center text-zinc-400 mt-4 text-sm sm:text-base">
          AI / ML Engineer • React Developer • Python Enthusiast
        </p>

        {/* Social Icons */}

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://github.com/omprakashxx-27"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-zinc-400 hover:text-orange-500 hover:scale-125 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/om-prakash-khuntia-49a543295"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-zinc-400 hover:text-orange-500 hover:scale-125 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:omprakashkhuntia27@gmail.com"
            className="text-2xl text-zinc-400 hover:text-orange-500 hover:scale-125 duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/917077724082"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-zinc-400 hover:text-green-500 hover:scale-125 duration-300"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* Divider */}

        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent my-8"></div>

        {/* Credits */}

        <p className="flex justify-center items-center gap-2 text-zinc-500 text-sm text-center">
          Made with
          <FaHeart className="text-red-500 animate-pulse" />
          using React, Tailwind CSS & Framer Motion
        </p>

        {/* Copyright */}

        <p className="text-center text-zinc-600 text-sm mt-5">
          © 2026 Om Prakash Khuntia. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;