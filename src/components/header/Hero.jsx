import React from "react";
import android from "../../assets/googleIcon.svg";
import iOS from "../../assets/appleIcon.svg";
import ReactGA from "react-ga";
// import mobileView from "../../assets/mobile-view.png";
import mobileView from "../../assets/newHeroImg.png";

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
    <div className="w-full 2xl:px-52 xl:px-24 md:px-14 px-5 absolute position">
      <div className="md:flex w-full md:gap-x-8 space-y-10">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[80px] lg:mt-10 2xl:mt-0 text-white font-extrabold mb-2 md:pb-5 capitalize">
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
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias enim, velit incidunt assumenda vel? Provident non esse atque
            magni, tempora, laudantium et, voluptatibus pariatur quo assumenda
            labore soluta temporibus?
          </p>
          <div className="w-full flex justify-center align-middle md:justify-start gap-6 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.immedi8moneymt"
              target="_blank"
              onClick={() =>
                handleEvent({
                  category: "playstore",
                  action: "User clicked playstore download button",
                })
              }
              className="block"
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
              className="block"
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
                className="w-[190px] lg:w-[235px] mx-auto"
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

          <div className="text-white mt-[75px] w-100 flex justify-center md:justify-start align-middle gap-4">
            <img src={people} alt="" className="w-[181.79px] h-[38px]" />
            <div className="flex gap-4 align-middle">
              <div className="text-center">
                <h4 className="text-2xl font-extrabold">345K+</h4>
                <p className="text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-extrabold">200K+</h4>
                <p className="text-sm">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10 md:py-0 mx-auto  pt-8 md:pt-0 lg:pt-2 xl:pt-0 2xl:mt-10 screenshot">
          <div className="w-full mx-auto mb-5">
            <img
              src={mobileView}
              alt=""
              className="mx-auto mt-[-30px] max-w-[275px] md:max-w-xs xl:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
