import React from "react";
// import Form from "./Form";
import android from "../../assets/googleIcon.svg";
import iOS from "../../assets/appleIcon.svg";
import ReactGA from "react-ga";
// import RatesForm from "./RatesForm";
// import mobile from "../assets/mobile_app.gif";
import mobileView from "../../assets/mobile-view.png";
// import mobile1 from "../assets/newImg.jpeg";
// import mobile1 from "../assets/newImg1.png";
// import mobile1 from "../assets/newHeroImg.png";

// import mobile1 from "../assets/mobile_design.gif";
// import mobile1 from "../assets/mobile-design1.gif";

// import video1 from "../assets/vidoe1.mp4";
const Hero = () => {
  const handleEvent = (event) => {
    ReactGA.event({
      category: event.category,
      action: event.action,
    });
  };
  return (
    // xl:px-52 md:px-14 px-5 py-8 md:py-24 lg:py-60 xl:py-24 h-auto w-full absolute top-8 md:top-0 xl:top-24

    // 2xl:px-52 xl:px-24 md:px-14 px-5  w-full absolute top-0 my-44 lg:my-52 2xl:my-80
    // new  xl:px-52 md:px-14 px-5 h-[70vh] w-full absolute top-0 py-44 lg:py-80 xl:py-72
    <div className="2xl:px-52 xl:px-24 md:px-14 px-5 w-full absolute top-0 my-[280px] md:my-[300px] lg:my-[400px] ">
      <div className="lg:flex w-full lg:gap-x-16">
        <div className=" lg:w-full text-center lg:text-left 2xl:mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-blue-950 font-extrabold mb-2 md:pb-5 capitalize">
            Financial Services at your disposal
          </h2>
          <p className="leading-6 text-base md:text-2xl font-extrabold text-blue-950">
            Payment Service Simplified.
          </p>
          <p className="leading-6 text-base md:text-2xl font-extrabold text-blue-950 my-3">
            Mobile Money Reinvented.
          </p>
          <p className="leading-6 text-base md:text-2xl font-extrabold text-blue-950 my-3">
            Remittance Untangled.
          </p>
          <div>
            <div className="mt-2 md:mt-10 ">
              {/* <div className="h-full w-1/3 flex align-middle justify-stretch"> */}
              {/* <h4 className="text-white text-lg w-1/3 md:text-2xl mt-2">
                Get Start
              </h4> */}
              {/* </div> */}
              <form action="#" className="w-full 2xl:w-2/3 mx-auto lg:mx-0">
                <div className="w-full flex align-middle">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="p-2 md:px-4 md:py-3 rounded-l-3xl  outline-none border border-blue-950 flex-1 w-[90%] lg:w-full"
                  />
                  <button
                    type="submit"
                    className="bg-blue-950 text-white p-2 md:px-3 md:py-3 rounded-r-3xl text-lg outline-none border-none"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* py-2 mx-auto  pt-10 */}
        {/* new  py-6 mx-auto  pt-20*/}
        <div className=" py-10 md:py-36 mx-auto pt-8 md:pt-20 lg:pt-2 xl:pt-0 2xl:mt-10">
          <div className="lg:w-full w-full mx-auto mb-5">
            <img
              src={mobileView}
              alt=""
              className="mx-auto mb-6 mt-[-30px] xl:mb-8 max-w-[275px] md:max-w-xs xl:max-w-none"
            />
            <div>
              {/* <h4 className="mt-14 font-bold text-xl lg:text-3xl md:text-2xl  uppercase text-red-600 mb-5">
              Download Our App Now
            </h4> */}
              <div className="flex items-center space-x-6 w-1/2 lg:w-full mx-auto">
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
                    className="w-[185px] md:w-[140px] lg:w-[205px] mx-auto"
                  />
                </a>
                {/* </div> */}
                {/* <div className="md:ml-8 w-[200px] mx-auto md:mx-0"> */}
                <a
                  href="https://apps.apple.com/us/app/imoney-money-transfer/id6446627721"
                  target="_blank"
                  className="block w-full"
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
            {/* <video className="" autoPlay loop muted>
              <source src={mobile} type="video/gif" />
            </video> */}
            {/* <Form /> */}
            {/* <RatesForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
