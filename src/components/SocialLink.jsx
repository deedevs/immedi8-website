import React from "react";

const SocialLink = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        alt="social link"
        className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]"
      />
    </div>
  );
};

export default SocialLink;
