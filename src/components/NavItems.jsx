import React, { useState } from "react";
import { Link } from "react-scroll";
import LoginBtn from "./LoginBtn";

const NavItems = ({ className, items }) => {
  return (
    <ul className={`${className} pb-14 z-0`}>
      {items.map((item, index) => (
        <li key={index} className="ml-5 cursor-pointer">
          <Link
            to={item.to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-165}
            duration={1000}
            className="hover:text-red-600 font-medium"
          >
            {item.name}
          </Link>
        </li>
      ))}
      <li className="ml-5">
        <a href="/career/post" className="hover:text-red-600 font-medium">
          Career
        </a>
      </li>
      <LoginBtn className="xl:hidden mt-8 ml-5" />
    </ul>
  );
};

export default NavItems;
