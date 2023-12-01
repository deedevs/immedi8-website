import React from "react";

const ServicesCard = ({ icon, heading, content }) => {
  return (
    <div className="p-5 shadow-lg rounded-md cursor-pointer bg-white text-gray-500 hover:bg-[#080145] hover:text-gray-300">
      <div className="flex flex-col items-start">
        <div className="w-20 h-20 card-gradient rounded-full flex justify-center align-middle p-3">
          <img src={icon} alt="secure" className="" />
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-bold leading-5 text-red-600 mb-3 md:text-base lg:text-xl ">
            {heading}
          </h4>
          <p className="text-base leading-6 ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
