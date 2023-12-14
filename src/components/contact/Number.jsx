import React from "react";

const Number = ({ icon, content }) => {
  return (
    <div className="w-full flex items-center justify-center md:justify-start">
      {/* <div className="">
        <img src={icon} alt="flag icon" className="w-[50px] h-[35px]" />
      </div> */}
      <p className="">
        <a href={`tel:${content}`} className="cursor-pointer">
          {content}
        </a>
      </p>
    </div>
  );
};

export default Number;