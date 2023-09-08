import React from "react";
import { Link } from "react-router-dom";

const RecruitmentNav = () => {
  return (
    <div className="lg:px-52 md:px-14 px-5 bg-[#1c2e4a] text-white fixed top-0 left-0 right-0 z-50 shadow-md w-full py-3 ">
      <ul className="flex gap-3 w-full">
        <Link to="/">
          <li className="hover:text-red-600 font-semibold leading-6">Home </li>
        </Link>
        <Link to="/recruitment/become-an-agent">
          <li className="hover:text-red-600 font-semibold leading-6">
            Become An Agent
          </li>
        </Link>
        {/* <Link to="/recruitment/career">
          <li className="hover:text-red-600 font-semibold leading-6">Career</li>
        </Link> */}
      </ul>
    </div>
  );
};

export default RecruitmentNav;
