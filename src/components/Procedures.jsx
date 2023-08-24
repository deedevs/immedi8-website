import React from "react";
import enter from "../assets/enter.png";
import users from "../assets/users.png";
import payment from "../assets/make-payment.png";

const Procedures = () => {
  return (
    <div className="bg-white text-[#080145] 2xl:px-52 xl:px-24 md:px-14 px-5 pt-20 pb-14 h-auto ">
      <div>
        <h4 className="pb-5 text-2xl text-red-600 lg:text-3xl font-bold text-center">
          How We Do It
        </h4>
        <p className="text-lg text-center ">
          View all our services online or on our mobile super App. <br /> It's
          simple and fast with three easy steps
        </p>

        {/* <div className="flex justify-around items-center py-8">
          <div className="flex flex-col justify-around items-center ">
            <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-black">
              1
            </div>
            <div className="py-4">
              <h4 className="text-2xl leading-5 tracking-wider">
                Enter Amount
              </h4>
            </div>
          </div>
          <hr className="text-white" />
          <div>
            <div className=" flex flex-col justify-around items-center ">
              <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-black">
                2
              </div>
              <div className="py-4">
                <h4 className="text-2xl leading-5 tracking-wider">
                  Enter Amount
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex flex-col justify-around items-center">
              <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-black">
                3
              </div>
              <div className="py-4">
                <h4 className="text-2xl leading-5 tracking-wider">
                  Enter Amount
                </h4>
              </div>
            </div>
          </div>
        </div> */}
        <div class="md:flex items-center w-full py-14">
          <div class="w-full md:w-80 h-[200px]  shadow-lg shadow-[#080145] p-3 border-slate-200 rounded-lg bg-[#080145]">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={enter} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-white text-lg lg:text-2xl text-center ">
              <p>Enter Amount</p>
            </div>
          </div>
          <div class="h-10 w-1 mx-auto md:w-[213px] md:h-0.5 bg-[#080145] "></div>
          <div class="w-full md:w-80 h-[200px]  shadow-lg shadow-[#080145] p-3 border-slate-200 rounded-lg bg-[#080145]">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={users} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-white text-lg lg:text-2xl text-center ">
              <p>Select Beneficiary</p>
            </div>
          </div>
          <div class="h-10 w-1 mx-auto md:w-[213px] md:h-0.5 bg-[#080145] "></div>
          <div class="w-full md:w-80 h-[200px]   shadow-lg shadow-[#080145] p-3 border-slate-200 rounded-lg bg-[#080145]">
            <div className="w-16 lg:w-24 h-16 lg:h-24 mx-auto mt-4 p-3 rounded-full bg-white">
              <img src={payment} alt="" className="w-full h-full" />
            </div>
            <div className="pt-3 pb-5 text-white text-lg lg:text-2xl text-center ">
              <p>Complete Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
