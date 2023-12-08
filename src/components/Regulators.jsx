import React from "react";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import regulatorsImg from "../assets/regulatorsImg.jpg";
import cbgImg from "../assets/instantAssets/cbg.png";

const Regulators = () => {
  return (
    <div
      id="Regulators"
      className="bg-white text-[#080145] xl:px-52 md:px-14 px-5 pt-14 pb-24 clip2"
    >
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
          className="space-y-8 w-full md:w-1/2 md:space-y-0 text-center mt-10"
        >
          <img
            src={cbgImg}
            alt="regulation image section"
            className="lg:w-[70%] lg:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Regulators;
