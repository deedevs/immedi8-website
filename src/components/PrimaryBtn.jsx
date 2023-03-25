import React from "react";

const PrimaryBtn = ({ name }) => {
  return (
    <button className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-red-600  text-white font-medium hover:border hover:border-red-600 hover:bg-white hover:text-black">
      {name}
    </button>
  );
};

export default PrimaryBtn;
