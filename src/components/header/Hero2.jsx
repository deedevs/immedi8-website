import React from "react";
import heroVid2 from "../../assets/videos/immedi8.mp4";
import Ratesmarquee from "../Ratesmarquee";

const Hero2 = () => {
  return (
    <div className="w-full h-full z-0 relative">
      <Ratesmarquee />
      <video
        className="w-full h-full object-fill z-[-20] absolute top-0 left-0"
        src={heroVid2}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero2;
