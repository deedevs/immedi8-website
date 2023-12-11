import React from "react";
import img from "../assets/why-us.png";
import low_cost from "../assets/low-cost.png";
import instant from "../assets/instant.png";
import simplicity from "../assets/simplicity.png";
import convenient from "../assets/convenient.png";
import secure from "../assets/secure.png";

const WhyUs = () => {
  return (
    <div className="why-gradient text-white 2xl:px-52 xl:px-24 md:px-14 px-5 pt-24 pb-24 h-auto">
      {/* <h4 className="pb-5 text-2xl text-red-600 lg:text-3xl font-bold text-center">
        Why Choose Us
      </h4> */}
      <div className="lg:flex w-full lg:gap-x-16">
        <div className="w-full lg:w-[35%] xl:w-[40%] mb-10 lg:mb-0">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-[65%] xl:w-[60%] md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-6 space-y-8 md:space-y-0">
          <div className="p-6 md:p-3 xl:p-6 rounded-lg shadow-md  hover:shadow-none bg-white">
            <div className="w-20 h-20 mx-auto">
              <img src={low_cost} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold py-6 text-[#080145] text-center">
              Low Cost
            </h2>
          </div>
          <div className="p-6 md:p-3 xl:p-6 rounded-lg shadow-md hover:shadow-none bg-white">
            <div className="w-20 h-20 mx-auto">
              <img src={simplicity} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold py-6 text-[#080145] text-center">
              Simplicity & convenience
            </h2>
          </div>
          {/* <div className="p-6 md:p-3 xl:p-6 rounded-lg shadow-md hover:shadow-none bg-white">
            <div className="w-20 h-20 mx-auto">
              <img src={convenient} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold py-6 text-[#080145] text-center">convenient</h2>
          </div> */}
          <div className="p-6 md:p-3 xl:p-6 rounded-lg shadow-md hover:shadow-none bg-white">
            <div className="w-20 h-20 mx-auto">
              <img src={instant} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold py-6 text-[#080145] text-center">
              Fast & Instant Delivery
            </h2>
          </div>
          <div className="p-6 md:p-3 xl:p-6 rounded-lg shadow-md  hover:shadow-none bg-white">
            <div className="w-20 h-20 mx-auto">
              <img src={secure} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold py-6 text-[#080145] text-center">
              Secure & Trusted
            </h2>
            {/* <div class="glitch-wrapper">
              <div class="glitch" data-text="Secure & Trusted">
                Secure & Trusted
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
