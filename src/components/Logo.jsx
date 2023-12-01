import React from "react";
// import logo from "../assets/imoneyNew.png";
import logo from "../assets/instantAssets/instantLogo.png";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className=" w-[200px]  h-[100px] my-1">
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
