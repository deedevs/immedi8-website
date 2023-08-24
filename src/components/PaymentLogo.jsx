import React from "react";

const PaymentLogo = ({ logo }) => {
  return (
    <div className="">
      <img
        src={logo}
        alt="logo"
        className="max-h-[75px] min-w-[50px] mx-auto"
      />
    </div>
  );
};

export default PaymentLogo;
