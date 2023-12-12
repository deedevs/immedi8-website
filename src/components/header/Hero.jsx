import React from "react";
import android from "../../assets/googleIcon.svg";
import iOS from "../../assets/appleIcon.svg";
import ReactGA from "react-ga";
import mobileView from "../../assets/mobile-view.png";
import heroImage from "../../assets/newHeroImg.png";
import NavBar from "./NavBar";
import Ratesmarquee from "../Ratesmarquee";

const Hero = () => {
  const handleEvent = (event) => {
    ReactGA.event({
      category: event.category,
      action: event.action,
    });
  };
  return (
    <>
      <div className="w-full h-full 2xl:px-52 xl:px-24 md:px-14 px-5 absolute position">
        <div className="lg:flex w-full lg:gap-x-12 h-auto  sm:space-y-12 md:space-y-0 2xl:mt-20  md:mt-0">
          <div className="lg:w-1/2 text-center space-y-4 lg:text-left lg:space-y-6 sm:mb-6 md:mb-2 lg:mb-0 lg:pt-10 2xl:pt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[95px] lg:mt-10 2xl:mt-0 text-white font-extrabold mb-2 md:pb-5 capitalize">
              Financial Services at your disposal
            </h2>
            <p className="leading-6 text-lg md:text-3xl font-semibold text-white">
              Payment Service Simplified.
            </p>
            <p className="leading-6 text-lg md:text-3xl font-semibold text-white my-3">
              Mobile Money Reinvented.
            </p>
            <p className="leading-6 text-lg md:text-3xl font-semibold text-white my-3">
              Remittance Untangled.
            </p>
            <div>
              <div className="mt-4 md:mt-20 2xl:mt-36">
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
            </div>
          </div>
          <div className="lg:w-1/2 screenshot 2xl:pt-10">
            <div className="w-full h-[375px] sm:h-[450px] lg:h-[500px]xl:w-[600px] mb-5 2xl:mb-14">
              <img
                src={heroImage}
                alt=""
                className="mx-auto w-full h-full object-contain"
              />
              <div>
                <div className="flex items-center space-x-6 w-1/2 lg:w-full mx-auto 2xl:pt-14">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.immedi8moneymt"
                    target="_blank"
                    onClick={() =>
                      handleEvent({
                        category: "playstore",
                        action: "User clicked playstore download button",
                      })
                    }
                    className="block w-full"
                  >
                    <img
                      src={android}
                      alt="Download Button"
                      className="w-[185px] md:w-[140px] lg:w-[365px] mx-auto"
                    />
                  </a>

                  <a
                    href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
                    target="_blank"
                    className="block w-full"
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
                      className="w-[225px] md:w-[170px] lg:w-[400px] mx-auto"
                    />
                  </a>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
