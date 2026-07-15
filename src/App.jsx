import Navbar from "./components/Navbar";

import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import HeroV2 from "./components/hero/HeroV2";


function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <HeroV2
        name="Om Prakash Khuntia"
        role="AI / ML Engineer"
      />

      <AboutSection />
      <SkillsSection />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;