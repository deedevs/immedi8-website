import React from "react";

const LoginBtn = ({ className }) => {
  return (
    <div>
      <a
        href="https://app.immedi8money.com"
        target="_blank"
        className={`py-3 px-10 bg-green-600 border text-lg text-white hover:bg-white hover:text-black hover:border hover:border-red-600 font-semibold rounded-full ${className}`}
      >
        <button>Login</button>
      </a>
    </div>
  );
};

export default LoginBtn;
