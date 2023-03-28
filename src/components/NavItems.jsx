import React, { useState } from "react";
import { Link } from "react-scroll";
import LoginBtn from "./LoginBtn";

const NavItems = ({ className }) => {
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item} className="ml-5 cursor-pointer">
          <Link
            to={item}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-165}
            duration={1000}
            className="hover:text-red-600 font-medium"
          >
            {item}
          </Link>
        </li>
      ))}
      <LoginBtn className="xl:hidden" />
    </ul>
  );
};

export default NavItems;
