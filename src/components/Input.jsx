import React from "react";

const Input = ({ type, id, state, setState }) => {
  return (
    <input
      type={type}
      className="w-full border border-gray-300 rounded p-3 text-base text-[#1c2e4a] outline-none"
      id={id}
      value={state}
      onChange={(event) => setState(event.target.value)}
    />
  );
};

export default Input;
