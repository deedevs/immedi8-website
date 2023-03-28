import React from "react";

const LoginBtn = ({ className }) => {
  return (
    <button
      className={`py-3 px-10 bg-green-600 border text-lg text-white hover:bg-white hover:text-black hover:border hover:border-red-600 font-semibold rounded-full ${className}`}
    >
      Login
    </button>
  );
};

export default LoginBtn;
