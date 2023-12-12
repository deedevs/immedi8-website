import React from "react";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import regulatorsImg from "../assets/regulatorsImg.jpg";
import cbgImg from "../assets/instantAssets/cbg.png";
import dot5 from "../assets/instantAssets/dots5.png";
import dot8 from "../assets/instantAssets/dot8.png";

const Regulators = () => {
  return (
    <div
      id="Regulators"
      className="bg-white text-[#080145] xl:px-24 2xl:px-52 md:px-14 px-5 pt-14 pb-24 clip2 relative"
    >
      <div className="absolute w-full max-w-sm opacity-20 right-1">
        <img src={dot5} alt="dots" />
      </div>
      <div className="absolute w-full max-w-sm opacity-20 right-[50%] bottom-20">
        <img src={dot5} alt="dots" />
      </div>
      <div className="absolute w-64 h-64 rounded-full bg-blue-200 opacity-20 right-[70%] top-20"></div>
      <div className="absolute w-32 h-32 rounded-full bg-blue-200 opacity-20 right-5 top-96 md:right-[60%] md:top-20"></div>
      <div className="absolute w-36 h-36 rounded-full bg-blue-200 opacity-20 md:left-10 md:bottom-20 right-20 bottom-44"></div>
      <div className="absolute w-28 h-28 rounded-full bg-blue-200 opacity-20 left-10 top-96 rmd:ight-[45%] md:top-64"></div>
      <div className="absolute w-20 h-20 rounded-full bg-blue-200 opacity-20 right-[35%] top-72"></div>{" "}
      <div className="absolute w-14 h-14 rounded-full bg-blue-200 opacity-20 right-[10%] bottom-10"></div>
      <SectionTitle title="Regulators" className="text-center" />
      <div className="md:flex w-full justify-between items-center">
        <div className="md:w-[50%] py-6 text-center md:text-start md:mr-14 md:mt-8 lg:mt-10 xxl:mt-14 space-y-2">
          <SectionHeader
            heading="Our Regulators"
            className="uppercase font-extrabold"
          />

          <p className="text-[#080145]  leading-6 text-sm md:text-lg mb-4">
            Authorize By the Financial Services Authority, under the Payment
            Services Regulation 2009.
            <span className="text-red-600"> PSD 584027</span> for the Provision
            of Payment Services.
          </p>

          <p className="leading-6 text-sm md:text-lg text-[#080145]  mb-4 ">
            Registered with Her Majesty’s Revenue and Customs (HMRC) for AML and
            Terrorism Financing Regulation. Registration Number{" "}
            <span className="text-red-600">12585462</span>
          </p>
          <p className="text-[#080145]  leading-6 text-sm md:text-lg mb-4">
            Registered With Uk Information Commissioner (ICO) for Data
            Protection. Bound by Data Protection Act 1998, Registration Number
            <span className="text-red-600"> Z2158030</span>
          </p>
          <p className="text-[#080145]  leading-6 text-sm md:text-lg mb-4">
            Regulated and Authorized By the Central Bank of the Gambia
          </p>
        </div>
        <div
          data-aos="slide-left"
          className="space-y-8 w-full md:w-1/2 md:space-y-0 text-center mt-10 d-flex justify-center items-center"
        >
          <img
            src={cbgImg}
            alt="regulation image section"
            className="w-2/3 mx-auto lg:w-[70%] lg:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Regulators;
