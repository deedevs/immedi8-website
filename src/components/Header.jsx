import React from "react";
// import NavBar from "./NavBar";
import Hero from "./Hero";
import Payments from "./Payments";

const Header = () => {
  return (
    <div
      className="header bg-no-repeat bg-cover bg-blend-overlay bg-center pb-36 relative mt-[140px] lg:mt-40"
      id="Home"
    >
      {/* <NavBar /> */}
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
