import React from "react";

export const SectionParagraph = ({ content, className }) => {
  return (
    <p
      className={`leading-6 text-sm md:text-lg text-gray-400 mb-2 ${className}`}
    >
      {content}
    </p>
  );
};
