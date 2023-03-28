import React from "react";

const CopyWrite = () => {
  const date = new Date().getFullYear();

  return (
    <p className="text-center text-gray-300 pt-14 text-sm lg:text-base">
      &copy; {date} Immdi8 Financial Services
    </p>
  );
};

export default CopyWrite;
