import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const Card = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative overflow-hidden flex justify-center items-center h-[300px] w-full shadow-lg rounded-md bg-[#0d244a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt={`${title} image`}
        className="max-w-[280px] object-contain"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 h-full w-full p-4 bg-gradient-to-r from-[#1c2e4a] to-red-600 flex flex-col justify-center items-center opacity-0 transition-all duration-[1s] ease-in-out text-white hover:opacity-[1]">
          <h3 className=" text-xl font-semibold mb-3">{title}</h3>
          <p className="text-sm text-center text-gray-300">{description}</p>
          <PrimaryBtn name="Download App" />
        </div>
      )}
    </div>
  );
};

export default Card;
