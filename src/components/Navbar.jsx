import { useState } from "react";
import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-orange-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-orange-500 font-bold text-xl sm:text-2xl">
          <FaCode />
          <span>Om.dev</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-orange-500"
                className="cursor-pointer transition"
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              top-[73px]
              left-0
              w-full
              h-[calc(100vh-73px)]
              bg-black/95
              backdrop-blur-2xl
              md:hidden
            "
          >

            <ul className="flex flex-col items-center justify-center h-full gap-10">

              {navItems.map((item) => (

                <li key={item}>

                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={() => setMenuOpen(false)}
                    className="
                      cursor-pointer
                      text-2xl
                      font-semibold
                      hover:text-orange-500
                      transition
                    "
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}

export default Navbar;