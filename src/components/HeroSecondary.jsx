import React from "react";
import SectionHeader from "./SectionHeader";

const HeroSecondary = ({ heading, date }) => {
  return (
    <div className="bg-gradient-to-r from-[#1c2e4a] to-red-600 text-white lg:px-52 md:px-14 px-5 pt-14 pb-24">
      <SectionHeader heading={heading} />
      <small>Last Updated: {date}</small>
    </div>
  );
};

export default HeroSecondary;
