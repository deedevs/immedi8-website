import React from "react";
import SectionHeader from "../SectionHeader";
import SectionParagraph from "../SectionParagraph";
import PrimaryBtn from "../PrimaryBtn";
import SectionTitle from "../SectionTitle";
import aboutImg from "../../assets/about.jpg";
import aboutImage from "../../assets/instantAssets/about.svg";
import circle from "../../assets/instantAssets/circle.png";
import dots7 from "../../assets/instantAssets/dots7.png";

const About = () => {
  return (
    <div
      id="About"
      // about-gradient
      className=" bg-[#0782BD] text-white 2xl:px-52 xl:px-24 md:px-14 px-5 py-16 relative"
    >
      <div className="absolute right-8 top-52 lg:right-20 lg:top-48 w-72 lg:w-96 z-0">
        <img src={circle} alt="circle" className="w-full opacity-20" />
      </div>
      <div className="absolute right-10 top-0 md:left-10 md:top-44 w-[300px] h-[300px] z-0 opacity-5 rounded-full border-[20px] border-[#ccc]"></div>
      <div className="absolute md:right-[40%] md:top-28 w-[200px] h-[200px] z-0 opacity-5 rounded-full  bg-[#ccc]"></div>

      <div className="absolute left-3 bottom-2  md:left-64 md:bottom-0 w-40">
        <img src={dots7} alt="7 dots" className="w-full opacity-20" />
      </div>

      <div className="flex flex-col md:flex-row gap-y-14 md:gap-x-24 w-full justify-between items-center">
        <div
          data-aos="slide-right"
          className="order-2 md:order-1 w-full md:w-1/2 "
        >
          <img src={aboutImage} alt="About Image" className="" />
        </div>
        <div className="order-1 md:order-2 md:w-[50%] py-12 text-center md:text-start md:mt-8 lg:mt-10 xxl:mt-14">
          <SectionHeader
            heading="One Stop Financial Services"
            className="uppercase font-extrabold text-gradient"
          />
          <SectionParagraph content="Immedi8 Financial Services: We are a Financial Services Institution specializing In Money Services Business, International Remittance (wholesale and retail) and Foreign Exchange & Currency Services . E-Commerce and FinTech Solutions" />
          <SectionParagraph content="Our existence was borne out of the need to provide the needed, Affordable, Reliable and fast transaction delivery platform via which transactional needs and investment requirements are met both locally and internationally." />
          <SectionParagraph content="We became the preferred choice for our customers because we emphasized reliability, affordability, and prompt delivery of transactions at the core of our services." />
        </div>
      </div>
    </div>
  );
};

export default About;
