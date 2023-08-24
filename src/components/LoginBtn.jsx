import React from "react";

const LoginBtn = ({ className, line }) => {
  return (
    <div className={`${line} mr-12 xl:mr-0 border-none`}>
      <a
        href="https://app.immedi8money.com"
        target="_blank"
        className={`py-2 px-8 md:px-4 lg:px-6 bg-transparent border text-sm cursor-pointer font-semibold leading-6 text-gray-900 hover:bg-red-200 rounded-full hover:text-black hover:border hover:border-red-600  ${className}`}
      >
        <button>Login | Sign Up</button>
      </a>
    </div>
  );
};

export default LoginBtn;
