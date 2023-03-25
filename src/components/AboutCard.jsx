import React from "react";

const AboutCard = ({ icon, heading, content }) => {
  return (
    <div className="p-5 shadow-md rounded-md cursor-pointer w-full ">
      <div className="flex items-center gap-6 md:max-w-sm w-full h-auto">
        <div className="w-[20%] md:w-[35%] md:mt-5 md:mx-auto h-[90px] md:h-[50px] lg:h-[90px]">
          <img src={icon} alt="secure" className="w-full h-full" />
        </div>
        <div className="text-left md:text-center">
          <h4 className="text-xl font-bold leading-5 text-red-600 mb-3 md:text-base lg:text-xl ">
            {heading}
          </h4>
          <p className="text-base leading-5 text-gray-500">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
