import React from "react";

const SectionTitle = ({ title, className }) => {
  return (
    <h5
      className={`text-red-600 uppercase md:text-xl text-base font-semibold pb-6 ${className}`}
    >
      {title}
    </h5>
  );
};

export default SectionTitle;
