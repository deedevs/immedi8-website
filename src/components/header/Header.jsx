import React, { useCallback } from "react";
// import heroVid from "../../assets/videos/vid1.mp4";
import "../../App";
import NavBar from "./NavBar";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Marquee from "react-fast-marquee";
import Ratesmarquee from "../Ratesmarquee";
import Hero from "./Hero";
import particlesConfig from "./particles-Config";
import Hero2 from "./Hero2";

const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);
  return (
    //  transition-all duration-5000 ease-in-out delay-300
    <div className="relative w-full h-screen">
      {/* <video
        className="w-full h-screen object-cover absolute top-0 left-0"
        src={heroVid}
        autoPlay
        loop
        muted
      ></video> */}
      {/* <div className="h-screen w-full absolute top-0 left-0 bg-slate-600/60"></div> */}
      {/* absolute inset-x-0 top-0 z-50 */}
      <Particles
        className="h-full w-full absolute top-0 left-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <header className="w-full h-full">
        <NavBar />
        <Ratesmarquee />
        <Hero />
        {/* <Hero2 /> */}
      </header>
      {/* </Particles> */}
    </div>
  );
};

export default Header;
