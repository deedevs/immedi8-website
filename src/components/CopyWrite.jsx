import React from "react";

const CopyWrite = () => {
  const date = new Date().getFullYear();

  return (
    <p className="text-center text-white text-sm lg:text-base">
      &copy; {date} Instant Financial Services
    </p>
  );
};

export default CopyWrite;
