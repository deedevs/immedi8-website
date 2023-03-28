import React from "react";
import SectionHeader from "./SectionHeader";
import SectionParagraph from "./SectionParagraph";
import PrimaryBtn from "./PrimaryBtn";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.jpg";

const Services = () => {
  return (
    <div
      id="About"
      className="bg-white text-black lg:px-52 md:px-14 px-5 pt-36 pb-24"
    >
      <SectionTitle title="About Us" className="text-center" />
      <div className="md:flex w-full justify-between items-center">
        <div className="md:w-[50%] py-6 text-center md:text-start md:mr-14 md:mt-8 lg:mt-10 xxl:mt-14">
          <SectionHeader
            heading="One Stop Financial Services"
            className="uppercase"
          />
          <SectionParagraph content="Immedi8 Financial Services: We are a Financial Services Institution specializing In Money Services Business, International Remittance (wholesale and retail) and Foreign Exchange & Currency Services . E-Commerce and FinTech Solutions" />
          <SectionParagraph content="Our existence was borne out of the need to provide the needed, Affordable, Reliable and fast transaction delivery platform via which transactional needs and investment requirements are met both locally and internationally." />
          <SectionParagraph content="We became the preferred choice for our customers because we emphasized reliability, affordability, and prompt delivery of transactions at the core of our services." />
        </div>
        <div
          data-aos="flip-left"
          className="space-y-8 w-full md:w-1/2 md:space-y-0"
        >
          <img src={aboutImg} alt="About Image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
