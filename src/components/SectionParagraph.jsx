import React from "react";

const SectionParagraph = ({ content, className }) => {
  return (
    <p
      className={`leading-6 text-sm md:text-lg text-gray-600 mb-4 ${className}`}
    >
      {content}
    </p>
  );
};

export default SectionParagraph;
