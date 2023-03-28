import React from "react";

const InputLabel = ({ labelFor, name }) => {
  return (
    <label
      htmlFor={labelFor}
      className="block mb-2 font-medium uppercase w-full text-left cursor-pointer"
    >
      {name}
    </label>
  );
};

export default InputLabel;
