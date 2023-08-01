import React from "react";
// import NavBar from "./NavBar";
import Hero from "./Hero";
import Payments from "./Payments";
// import Marquee from "react-fast-marquee";
import Ratesmarquee from "./Ratesmarquee";

const Header = () => {
  return (
    <div
      className="header bg-no-repeat bg-cover bg-blend-overlay bg-center pb-36 relative mt-[100px] lg:mt-32"
      id="Home"
    >
      {/* <NavBar /> */}
      <Ratesmarquee />
      <Hero />
      <Payments
        className={
          "bottom-[-75px] md:bottom-[-85px] left-[11%] md:left-[15%] lg:left-[18%]"
        }
      />
    </div>
  );
};

export default Header;
