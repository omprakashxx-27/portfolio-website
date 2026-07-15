import AboutText from "./AboutText";
import AboutCard from "./AboutCard";
import Stats from "./Stats";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-black px-6 overflow-hidden"
    >
      {/* Orange Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-20">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AboutText />

          <div>
            <AboutCard />
            <Stats />
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;