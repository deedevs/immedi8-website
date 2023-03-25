import React from "react";

const ServicesCard = ({ icon, heading, content }) => {
  return (
    <div className="p-5 shadow-md rounded-md cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="py-3">
          <img src={icon} alt="secure" className="" />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-bold leading-5 text-red-600 mb-3 md:text-base lg:text-xl ">
            {heading}
          </h4>
          <p className="text-base leading-5 text-gray-500">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
