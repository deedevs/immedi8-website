import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="lg:w-[125px] w-[100px] lg:h-[125px] h-[100px]">
      <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
    </div>
  );
};

export default Logo;
