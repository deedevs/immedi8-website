import React from "react";
import SectionHeader from "./SectionHeader";

const CareerPostHero = ({ heading, date }) => {
  return (
    <div className="bg-gradient-to-r from-[#1c2e4a] to-red-600 text-white lg:px-52 md:px-14 px-5 py-32">
      <div className="">
        <SectionHeader heading={heading} />
        <small>Post: {date}</small>
      </div>
    </div>
  );
};

export default CareerPostHero;
