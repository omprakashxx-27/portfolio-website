import { useState, useEffect } from "react";


function Hero({ name, role }) {
  const texts = [
    "Building AI Models...",
    "Creating React Applications...",
    "Learning Every Day...",
    "Solving Real-world Problems...",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  // Change sentence every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setLetterIndex(0);
      setDisplayText("");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = texts[index];

    if (letterIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [letterIndex, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Glass Card */}
      <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-orange-500/20 rounded-3xl shadow-[0_0_60px_rgba(249,115,22,0.15)] w-full max-w-7xl p-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Terminal Buttons */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Terminal Command */}
            <p className="text-orange-500 font-mono mb-4">
              &gt; whoami
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold">
              {name}
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl text-orange-400 mt-4 font-semibold">
              {role}
            </h2>

            {/* Typing Animation */}
            <p className="mt-6 text-gray-300 text-xl font-mono">
              &gt; {displayText}
              <span className="animate-pulse text-orange-500">█</span>
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300 text-white px-6 py-3 rounded-lg transition"
              >
                Resume
              </a>

              <a
                href="https://github.com/omprakashxx-27"
                target="_blank"
                rel="noreferrer"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:scale-105 duration-300 px-6 py-3 rounded-lg transition"
              >
                GitHub
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;