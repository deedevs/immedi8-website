import React from "react";

const PaymentLogo = ({ logo }) => {
  return (
    <div className="">
      <img
        src={logo}
        alt="logo"
        className="max-h-[200px] min-w-[200px] mx-auto"
      />
    </div>
  );
};

export default PaymentLogo;
