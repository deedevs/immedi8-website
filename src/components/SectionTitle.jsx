import React from "react";

const SectionTitle = ({ title, className }) => {
  return (
    <h5
      className={`text-red-600 uppercase md:text-xl text-base font-semibold lg:pb-7 ${className}`}
    >
      {title}
    </h5>
  );
};

export default SectionTitle;
