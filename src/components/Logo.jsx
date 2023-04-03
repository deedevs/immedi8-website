import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="lg:w-[125px] w-[100px] lg:h-[125px] h-[100px]">
      <Link to="/">
        <img src={logo} alt="logo" srcSet="" className="w-full h-full" />
      </Link>
    </div>
  );
};

export default Logo;
