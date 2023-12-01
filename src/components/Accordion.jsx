import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div key={index} className="col h-fit border border-gray-300 rounded">
          <button
            type="button"
            className={`w-full mt-0 px-3 py-3 text-base flex justify-between items-center focus:outline-none hover:bg-gradient-to-r from-[#0e3169] to-[#1c2e4a] hover:text-gray-300 ${
              activeIndex === index ? "bg-[#142237]" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
            <svg
              className={`w-4 h-4 ml-2 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 16a1 1 0 0 1-.71-.29l-4-4a1 1 0 0 1 1.42-1.42L10 13.59l3.29-3.3a1 1 0 1 1 1.42 1.42l-4 4A1 1 0 0 1 10 16z"
              />
            </svg>
          </button>
          <div
            className={`p-4 text-left text-gray-400 text-lg ${
              activeIndex !== index ? "hidden" : "block"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
