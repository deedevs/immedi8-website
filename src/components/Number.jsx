import React from "react";

const Number = ({ icon, content }) => {
  return (
    <div className="flex items-center">
      <div className="">
        <img src={icon} alt="flag icon" className="w-[50px] h-[35px]" />
      </div>
      <p className="ml-8">{content}</p>
    </div>
  );
};

export default Number;
