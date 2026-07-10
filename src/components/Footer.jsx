import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-8 text-center">
      <h2 className="text-2xl font-bold text-orange-500">
        Om Prakash Khuntia
      </h2>

      <p className="text-gray-400 mt-3">
        AI / ML Engineer • React Developer • Python Enthusiast
      </p>

      <p className="text-gray-500 mt-6 flex items-center justify-center gap-2">
        Made with <FaHeart className="text-red-500" />
        using React & Tailwind CSS
      </p>

      <p className="text-gray-600 mt-4">
        © 2026 Om Prakash Khuntia. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;