import React from "react";
import Form from "./Form";
import android from "../assets/android.jpg";
import iOS from "../assets/iOS.jpg";
import ReactGA from "react-ga";

const Hero = () => {
  const handleEvent = (event) => {
    ReactGA.event({
      category: event.category,
      action: event.action,
    });
  };
  return (
    <div className=" lg:px-52 md:px-14 px-5 py-8 h-full">
      <div className="md:flex w-full md:gap-x-24">
        <div className=" md:w-1/2 py-6 text-center md:text-start pt-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-red-600 pb-5 capitalize">
            Immedi8 Financial Services
          </h2>
          <p className="leading-6 text-lg md:text-2xl text-gray-400">
            Send money to The Gambia Fast and Secured with competitive rate
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
        <div className="px-14 md:px-0 py-6 my-auto h-[500px]">
          <div className="md:w-full mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
