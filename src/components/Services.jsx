import React from "react";
import ServiceCard from "./ServiceCard";
import cash from "../assets/cash.png";
import payment from "../assets/payment.png";
import wallet from "../assets/wallet.png";
import bankDeposit from "../assets/bankDeposit.png";
import SectionHeader from "./SectionHeader";
import SectionParagraph from "./SectionParagraph";
import PrimaryBtn from "./PrimaryBtn";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <div
      id="Services"
      className="bg-white text-black lg:px-52 md:px-14 px-5 pt-14 pb-24"
    >
      <div className="md:flex w-full justify-between ">
        <div className="md:w-[40%] py-6 text-center md:text-start md:mr-14 md:mt-32 lg:mt-24 xxl:mt-20">
          <SectionTitle title="Our Services" />
          <SectionHeader heading="Immedi8 Financial Services" />
          <SectionParagraph
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            iusto quasi, a iure reprehenderit illum voluptatum accusantium eaque
            ipsam consequatur dolores, sed eligendi id animi ipsum neque
            deserunt! Iste, et!"
          />
          {/* <PrimaryBtn name="Join Now" /> */}
        </div>
        <div
          data-aos="flip-left"
          className=" md:w-[60%] md:grid md:grid-cols-2 md:grid-rows-2 gap-6 mt-16 space-y-8 md:space-y-0"
        >
          <ServiceCard
            icon={bankDeposit}
            heading="Online Bank Deposit"
            content="We Can Deposit in to Over 1,000 Banks Around The  World"
          />
          <ServiceCard
            icon={wallet}
            heading="Mobile Money E-Wallet"
            content="We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners."
          />
          <ServiceCard
            icon={cash}
            heading="Cash Pickup"
            content="Fast Cash Pickup from our Large Network of Locations."
          />
          <ServiceCard
            icon={payment}
            heading="Payment Services"
            content="Our E-Payment Solution and Integrated Serfvices, Offers Quick Online Payment for Goods& Services, Utility Bills, Mobile Top-Ups."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
