import React from "react";

const SocialLink = ({ img, url }) => {
  return (
    <a href={url} target="_blank">
      <img
        src={img}
        alt="social link"
        className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]"
      />
    </a>
  );
};

export default SocialLink;
