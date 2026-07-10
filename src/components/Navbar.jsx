import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-orange-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-orange-500 text-2xl font-bold">
          <FaCode />
          <span>Om.dev</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;