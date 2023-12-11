import React from "react";

const InputLabel = ({ labelFor, name }) => {
  return (
    <label
      htmlFor={labelFor}
      className="block mb-2 text-[#1c2e4a] font-medium uppercase w-full text-left cursor-pointer"
    >
      {name}
    </label>
  );
};

export default InputLabel;
