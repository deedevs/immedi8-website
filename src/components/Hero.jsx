import React from "react";
import Form from "./Form";
import android from "../assets/android.jpg";
import iOS from "../assets/iOS.jpg";
import ReactGA from "react-ga";
import ForexForm from "./ForexForm";

const Hero = () => {
  const handleEvent = (event) => {
    ReactGA.event({
      category: event.category,
      action: event.action,
    });
  };
  return (
    <div className=" xl:px-52 md:px-14 px-5 py-8 h-full">
      <div className="lg:flex w-full lg:gap-x-20">
        <div className="lg:w-1/2  py-6 text-center md:text-start pt-20">
          <h2 className="text-xl md:text-2xl lg:text-5xl text-red-600 pb-5 capitalize">
            Immedi8 Financial Services
          </h2>
          {/* <p className="leading-6 text-lg md:text-2xl text-gray-400">
            Send money to The Gambia Fast and Secured with competitive rate
          </p> */}
          <p className="leading-6 text-lg md:text-2xl text-gray-400 my-3">
            Remittance Untangled, Mobile Money reinvented
          </p>
          <p className="leading-6 text-lg md:text-2xl text-gray-400 my-3">
            Send, Topup, Cash-In, Cash-Out, Pay & Buy
          </p>
          {/* <button className="mt-8 px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border bg-red-600 text-white font-medium hover:border hover:border-red-600 hover:bg-white hover:text-black">
            Discover now
          </button> */}
          <div>
            <h4 className="mt-14 font-bold text-xl lg:text-3xl md:text-2xl  uppercase text-red-600 mb-5">
              Download Our App Now
            </h4>
            <div className="md:flex items-center space-y-6 md:space-y-0">
              <div className="w-[150px] mx-auto md:mx-0">
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
              <div className="md:ml-8 w-[150px] mx-auto md:mx-0">
                <a
                  href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
                  target="_blank"
                >
                  <img src={iOS} alt="Download Button" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 py-6  lg:py-16 my-auto h-[500px]">
          <div className="w-full mx-auto">
            <ForexForm />
            {/* <Form /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
