import React from "react";
import enter from "../assets/enter.png";
import users from "../assets/users.png";
import payment from "../assets/make-payment.png";

const Procedures = () => {
  return (
    <div className="how-gradient text-white 2xl:px-52 xl:px-24 md:px-14 px-5 pt-20 pb-20 h-auto ">
      <div>
        <h4 className="py-10 text-2xl text-red-600 lg:text-3xl font-bold text-center">
          How We Do It
        </h4>
        <p className="text-lg text-center ">
          View all our services online or on our mobile super App. <br /> It's
          simple and fast with three easy steps
        </p>

        <div className="md:flex items-center w-full py-14">
          <div className="w-full md:w-80 h-[200px]  shadow-lg shadow-[#100f1f] p-3 border-slate-200 rounded-lg bg-white">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={enter} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-[#080145] text-md lg:text-lg text-center ">
              <p>Enter Amount</p>
            </div>
          </div>
          <div className="h-10 w-1 mx-auto md:w-[213px] md:h-0.5 xl:w-[450px] bg-white "></div>
          <div className="w-full md:w-80 h-[200px]  shadow-lg shadow-[#100f1f] p-3 border-slate-200 rounded-lg bg-white">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={users} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-[#080145] text-md lg:text-lg text-center ">
              <p>Select Beneficiary</p>
            </div>
          </div>
          <div className="h-10 w-1 mx-auto md:w-[213px] md:h-0.5 xl:w-[450px] bg-white "></div>
          <div className="w-full md:w-80 h-[200px]   shadow-lg shadow-[#100f1f] p-3 border-slate-200 rounded-lg bg-white">
            <div className="w-16 lg:w-24 h-16 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={payment} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-[#080145] text-md lg:text-lg text-center ">
              <p>Complete Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
