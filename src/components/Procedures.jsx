import React from "react";
import enter from "../assets/enter.png";
import users from "../assets/users.png";
import payment from "../assets/make-payment.png";

const Procedures = () => {
  return (
    // how-gradient
    <div className=" bg-[#0782BD] text-white 2xl:px-52 xl:px-24 md:px-14 px-5 pt-20 pb-20 h-auto relative">
      <div className="absolute right-[50%] top-[480%] md:right-[80%] md:top-[10%] w-[350px] h-[350px] z-0 opacity-5 rounded-full  bg-[#ccc]"></div>
      <div className="absolute right-[40%] top-96 md:right-[30%] md:top-[40%] w-[100px] h-[100px] z-0 opacity-5 rounded-full  bg-[#ccc]"></div>
      <div className="absolute right-10 top-[80%] md:right-[20%] md:top-[70%] w-[350px] h-[350px] z-0 opacity-5 rounded-full  bg-[#ccc]"></div>
      <div className="absolute left-20 top-[100%] md:right-[65%] md:top-[70%] w-[150px] h-[150px] z-0 opacity-5 rounded-full  bg-[#ccc]"></div>
      <div>
        <h4 className="py-10 text-2xl text-[#080145] lg:text-3xl font-bold text-center">
          How We Do It
        </h4>
        <p className="text-lg text-center text-[#080145]">
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
