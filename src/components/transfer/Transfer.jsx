import React from "react";
import RatesForm from "./RatedForm";
import Payments from "../Payments";
import transferImg from "../../assets/transfer.png";

const Transfer = () => {
  return (
    <div className="bg-[#080145] 2xl:px-52 xl:px-24 md:px-14 px-5   pb-32 h-full clip relative">
      <Payments className="top-[0px] md:top-[0px] left-[5%] md:left-[5%] lg:left-[5%] z-50" />

      <div className="md:flex w-full md:gap-x-24 pt-[460px] sm:pt-[380px] 2xl:pt-[450px]">
        <div className="flex-1 md:w-2/3 py-2 md:py-6 text-center md:text-start text-white">
          <p className="leading-6 text-2xl md:text-5xl font-extrabold  my-3">
            Delivered As You Send &#8482;
          </p>
          <p className="leading-6 text-lg md:text-3xl font-bold my-3">
            We Are Fast, Very Fast
          </p>
          <p className="leading-6 text-lg md:text-xl  my-3">
            Sending money is not rocket science, <br /> It should be cheap and
            hastle free. <br /> Check our rates now.
          </p>

          <div>
            <div className="mt-10">
              <p className="leading-6 text-base md:text-lg lg:text-3xl font-bold my-1 md:my-3">
                Sign Up For A Free Account
              </p>
              <form action="#" className="w-full 2xl:w-2/3 mx-auto lg:mx-0">
                <div className="w-full flex align-middle">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="p-2 md:px-4 md:py-3 rounded-l-3xl  outline-none border border-blue-950 flex-1 w-[90%] lg:w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#b90000] text-white p-2 md:px-3 md:py-3 rounded-r-3xl text-lg outline-none border-none"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <button className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-red-600 text-white font-medium hover:border hover:border-red-600 hover:bg-white hover:text-black">
          Discover now
        </button> */}
          {/*<div>
            <h4 className="mt-14 font-bold text-xl lg:text-3xl md:text-2xl  uppercase text-red-600 mb-5">
              Download Our App Now
            </h4>
            <div className="md:flex items-center space-y-6 md:space-y-0">
              <div className="w-[200px] mx-auto md:mx-0">
                <a
                  href="https://play.google.com/store/apps/details?id=com.immedi8moneymt"
                  target="_blank"
                  onClick={() =>
                    handleEvent({
                      category: "playstore",
                      action: "User clicked playstore download button",
                    })
                  }
                >
                  <img src={android} alt="Download Button" />
                </a>
              </div>
              <div className="md:ml-8 w-[200px] mx-auto md:mx-0">
                <a
                  href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
                  target="_blank"
                >
                  <img src={iOS} alt="Download Button" />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex-1 py-6 my-auto pt-10 md:pt-0">
          <div className="md:w-full w-full">
            <img src={transferImg} alt="" />
            {/* <RatesForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
