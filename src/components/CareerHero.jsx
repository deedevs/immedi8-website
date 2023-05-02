import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import careerImg from "../assets/career.jpg";

const CareerHero = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c2e4a] to-red-600 lg:px-52 md:px-14 px-5 pt-8 pb-5 h-full ">
      <div className="md:flex w-full md:gap-x-24">
        <div className=" md:w-2/3 py-6 text-center md:text-start pt-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-red-600 pb-5 capitalize">
            Build the future with us.
          </h2>
          <p className="leading-6 text-lg md:text-2xl text-gray-400 my-3">
            Join our team bringing modern, affordable financial and software
            services to those who need them the most.
          </p>

          <PrimaryBtn name="Join Us Now" />
        </div>
        <div className="px-14 md:px-0 py-16 my-auto  md:w-[33.333%]">
          <div className="md:w-full mx-auto">
            <img src={careerImg} alt="career photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
