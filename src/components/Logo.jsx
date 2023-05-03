import React from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="lg:w-[125px] w-[100px] lg:h-[125px] h-[100px] my-1">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          srcSet=""
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;
