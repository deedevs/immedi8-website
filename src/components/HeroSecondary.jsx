import React from "react";
import SectionHeader from "./SectionHeader";
import legalImg from "../assets/legalImg.png";

const HeroSecondary = ({ heading, date }) => {
  return (
    <div className="bg-gradient-to-r from-[#1c2e4a] to-red-600 text-white lg:px-52 md:px-14 px-5 pt-8 pb-14">
      <div className="flex justify-between items-center">
        <div className="mt-10">
          <SectionHeader heading={heading} />
          <small>Last Updated: {date}</small>
        </div>
        <div className="max-w-[200px] max-h-[250px]">
          <img
            src={legalImg}
            alt="Legal statements image"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
