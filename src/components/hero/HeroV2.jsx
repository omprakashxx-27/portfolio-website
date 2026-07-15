import Background from "./Background";
import HeroText from "./HeroText";
import FloatingBadge from "./FloatingBadge";
import MouseGlow from "./MouseGlow";
import MouseTrail from "./MouseTrail";
import FloatingIcons from "./FloatingIcons";

function HeroV2() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-28
        pb-16
      "
    >
      {/* Mouse Effects */}
      <MouseGlow />
      <MouseTrail />

      {/* Background */}
      <Background />

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            lg:gap-20
            items-center
          "
        >
          {/* Hero Text */}
          <div className="order-2 lg:order-1">
            <HeroText />
          </div>

          {/* Floating Card */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:justify-end
            "
          >
            <FloatingBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroV2;