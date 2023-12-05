import React from "react";

const PaymentMethodIcons = ({ logo }) => {
  return (
    <div className="d-flex justify-center items-center">
      <img
        src={logo}
        alt="logo"
        className="max-h-[100px] min-w-[100px] mx-auto my-auto"
      />
    </div>
  );
};

export default PaymentMethodIcons;
