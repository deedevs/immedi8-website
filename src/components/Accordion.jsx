import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className=" border-b border-gray-300 rounded">
          <button
            type="button"
            className={`w-full mt-0 px-6 py-8 text-xl lg:text-2xl flex justify-between items-center focus:outline-none hover:bg-gradient-to-r from-[#0e3169] to-[#1c2e4a] hover:text-gray-300 ${
              activeIndex === index ? "bg-[#142237]" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
            <svg
              className={`w-4 h-4 ${
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
              activeIndex !== index ? "hidden" : ""
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
