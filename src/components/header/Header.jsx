import React from "react";
import heroVid from "../../assets/videos/vid1.mp4";
import "../../App";
import NavBar from "./NavBar";
import Marquee from "react-fast-marquee";
import Ratesmarquee from "../Ratesmarquee";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="relative w-full h-screen transition-all duration-5000 ease-in-out delay-300">
      <video
        className="w-full h-screen object-cover absolute top-0 left-0"
        src={heroVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="h-screen w-full absolute top-0 left-0 bg-slate-600/60"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar />
        <Ratesmarquee />
        <Hero />
      </header>
    </div>
  );
};

export default Header;
