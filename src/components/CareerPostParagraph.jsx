import React from "react";

const CareerPostParagraph = ({ heading, content }) => {
  return (
    <div className=" text-black lg:px-52 md:px-14 px-5">
      <h3 className="pt-6 text-xl capitalize font-semibold text-[#1c2e4a]">
        {heading}
      </h3>
      <p className="text-base font-medium text-gray-500">{content}</p>
    </div>
  );
};

export default CareerPostParagraph;
