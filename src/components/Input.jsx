import React from "react";

const Input = ({ type, id, name, onChange, value }) => {
  return (
    <input
      type={type}
      className="w-full border border-gray-300 rounded p-3 text-base text-[#1c2e4a] outline-none"
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
