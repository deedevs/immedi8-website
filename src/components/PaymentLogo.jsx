import React from "react";

const PaymentLogo = ({ logo }) => {
  return (
    <div className="">
      <img
        src={logo}
        alt="logo"
        className="h-[150px] w-[150px] lg:max-h-[200px] lg:max-w-[200px] mx-auto"
      />
    </div>
  );
};

export default PaymentLogo;
