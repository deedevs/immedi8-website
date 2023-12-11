import React from "react";
import android from "../../assets/googleIcon.svg";
import iOS from "../../assets/appleIcon.svg";
import ReactGA from "react-ga";
import mobileView from "../../assets/mobile-view.png";
// import mobileView from "../../assets/newHeroImg.png";

import people from "../../assets/people.png";

import Typewriter from "typewriter-effect";

const Hero = () => {
  const handleEvent = (event) => {
    ReactGA.event({
      category: event.category,
      action: event.action,
    });
  };

  return (
    // mt-16 md:mt-44 lg:mt-0 xl:mt-8
    <div className="w-full h-full 2xl:px-52 xl:px-24 md:px-14 px-5 mt-16 md:mt-44 lg:mt-24 xl:mt-36">
      <div className="md:flex w-full md:gap-x-8 space-y-8 md:space-y-0  ">
        <div className="relative w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[80px] lg:mt-10 2xl:mt-0  font-extrabold mb-2 md:pb-5 capitalize text-gradient">
            Financial Services at your disposal <br />
            {/* <span className="text-orange-600">
              <Typewriter
                options={{
                  strings: [
                    "Payment Service Simplified.",
                    "Remittance Untangled",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "..",
                }}
              />
            </span> */}
          </h2>
          <p className="text-slate-400 md:text-xl xl:text-3xl">
            Payment Service Simplified. <br />
            Remittance Untangled.
          </p>
          <div className=" flex justify-center items-center  md:justify-start gap-6 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.immedi8moneymt"
              target="_blank"
              onClick={() =>
                handleEvent({
                  category: "playstore",
                  action: "User clicked playstore download button",
                })
              }
              className="block ml-8 md:ml-0"
            >
              <img
                src={android}
                alt="Download Button"
                className="w-[165px] lg:w-[205px] mx-auto"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
              target="_blank"
              className="block "
              onClick={() =>
                handleEvent({
                  category: "applestore",
                  action: "User clicked applestore download button",
                })
              }
            >
              <img
                src={iOS}
                alt="Download Button"
                className="w-[190px] lg:w-[235px]"
              />
            </a>
          </div>
          {/* <p className="leading-6 text-lg md:text-3xl font-semibold text-white">
            Payment Service Simplified.
          </p>
          <p className="leading-6 text-lg md:text-3xl font-semibold text-white my-3">
            Mobile Money Reinvented.
          </p>
          <p className="leading-6 text-lg md:text-3xl font-semibold text-white my-3">
            Remittance Untangled.
          </p> */}
          {/* <div>
            <div className="mt-2 md:mt-10 ">
              <form action="#" className="w-full 2xl:w-2/3 mx-auto lg:mx-0">
                <div className="w-full flex align-middle">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="p-2 md:px-5 md:py-5 rounded-l-full text-xl outline-none border border-blue-950 flex-1 w-[90%] lg:w-full"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white p-2 md:px-3 md:py-3 rounded-r-full text-lg outline-none border-none"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div> */}

          <div className="text-white mt-[39px] lg:mt-[50px] xl:mt-[75px] w-100 flex justify-center md:justify-start align-middle gap-4 p-8 md:p-0">
            <img
              src={people}
              alt=""
              className="w-[150px] h-[28px] md:w-[181.79px] md:h-[38px]"
            />
            <div className="flex gap-4 align-middle">
              <div className="text-center">
                <h4 className="text-lg md:text-2xl font-extrabold">345K+</h4>
                <p className="text-xs md:text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg md:text-2xl font-extrabold">200K+</h4>
                <p className="text-xs md:text-sm">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        {/*  py-10 md:py-0  pt-8 md:pt-0 lg:pt-2 xl:pt-0 2xl:mt-10 screenshot */}
        <div className="relative w-full md:w-1/2 ">
          <div className="absolute bottom-50 right-50 d-flex justify-center items-center w-full h-full z-10 opacity-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 793 792"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                zIndex: "1",
              }}
            >
              <path
                d="M651.5 95.5C721.5 150.5 772 232 787.5 320C802.5 407.5 782 501.5 730.5 564.5C679 627.5 596.5 660 508.5 703.5C420 746.5 326.5 801 240.5 789.5C154 777.5 75 700.5 35.5 610.5C-4.5 520.5 -5 418.5 10 316.5C25.5 215 56.5 113.5 125 58.5C193 3.5 298 -5.50001 395 3.99999C492.5 13.5 582 41 651.5 95.5Z"
                fill="#D9E8FF"
              />
            </svg>
          </div>
          {/*z-50 mx-auto mt-[-30px]  max-w-[275px] md:max-w-xs xl:max-w-[600px] */}
          <div className="w-full h-[400px] md:h-full xl:h-[500px] mb-5 z-50">
            <img
              src={mobileView}
              alt=""
              className="z-50 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
