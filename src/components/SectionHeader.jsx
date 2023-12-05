import React from "react";

const SectionHeader = ({ heading, className }) => {
  return (
    <h2
      className={`capitalize text-3xl lg:text-5xl text-gradient pb-5 ${className}`}
    >
      {heading}
    </h2>
  );
};

export default SectionHeader;
