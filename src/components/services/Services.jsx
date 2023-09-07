import React from "react";
import ServiceCard from "./ServiceCard";
import cash from "../../assets/cash.png";
import payment from "../../assets/payment.png";
import cart from "../../assets/icons/cart.png";
import wallet from "../../assets/wallet.png";
import bankDeposit from "../../assets/bankDeposit.png";
import shoping_cart from "../../assets/icons/shoping-cart.png";
import SectionHeader from "../SectionHeader";

const Services = () => {
  return (
    <div
      id="Services"
      className="bg-[#080145] text-white 2xl:px-52 xl:px-24 md:px-14 px-5 pt-14 pb-16 octa"
    >
      {/* md:flex w-full justify-between  */}
      <div className="">
        <SectionHeader
          heading="Our Services you Can Use"
          className="uppercase text-center font-bold"
        />

        <div
          data-aos="flip-left"
          className="w-full h-auto mt-12 p-6 border-none bg-white rounded-3xl"
        >
          <div className="w-20 h-20 mx-auto mb-3">
            <img src={payment} alt="" className="w-full h-full" />
          </div>
          <h3 className="text-center text-[#080145] text-2xl font-bold">
            {" "}
            Send Money
          </h3>
          <p className="text-[#080145] text-center mt-4">
            Sending money should be hastle free, fast, cheap and trusted. <br />{" "}
            Using our Imoney App, Your money is delivered as you send.
            <br /> We are fast, very fast
          </p>
          {/* <p className="">We accept</p> */}
          <div className="py-10 text-black">
            <h4 className="text-center text-xl font-semibold py-6">
              We Accept
            </h4>
            <div className=" w-full lg:w-[80%] mx-auto space-y-6 md:space-y-0 md:flex justify-between md:gap-6 pt-3 align-middle">
              <div className="w-full text-center md:w-[25%] py-3 px-6 lg:py-6 lg:px-10 rounded-lg bg-[#b90000] text-white text-base lg:text-lg font-semibold hover:bg-white hover:text-[#b90000]">
                Debit Card
              </div>
              <div className="w-full text-center md:w-[25%] py-3 px-6 lg:py-6 lg:px-10 rounded-lg bg-[#b90000] text-white text-base lg:text-lg font-semibold hover:bg-white hover:text-[#b90000]">
                Credit Card
              </div>
              <div className="w-full text-center md:w-[25%] py-3 px-6 lg:py-6 lg:px-10 rounded-lg bg-[#b90000] text-white text-base lg:text-lg font-semibold hover:bg-white hover:text-[#b90000]">
                Bank Transfer
              </div>
              <div className="w-full text-center md:w-[25%] py-3 px-6 lg:py-6 lg:px-10 rounded-lg bg-[#b90000] text-white text-base lg:text-lg font-semibold hover:bg-white hover:text-[#b90000]">
                Mobile Money
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className=" w-full md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 mt-16 space-y-8 md:space-y-0"
        >
          <ServiceCard
            icon={cash}
            heading="Cash Pickup"
            content="Fast Cash Pickup from our Large Network of Locations."
          />
          <ServiceCard
            icon={bankDeposit}
            heading="Bank Deposit"
            content="We Can Deposit in to Over 1,000 Banks Around The  World"
          />
          <ServiceCard
            icon={wallet}
            heading="Mobile Money / eWallet"
            content="We can deliver Payments into our integrated mobile Wallet partners around the world."
          />
          <ServiceCard
            icon={wallet}
            heading="Electricity Purchase"
            content="We Provide electricity power vending through our integrated super Mobile App."
          />
          <ServiceCard
            icon={payment}
            heading="Mobile AirTime"
            content="We provide Mobile AirTime vending. We are connected to many GSM providers around the world."
          />

          <ServiceCard
            icon={cart}
            heading="Buy Goods & Services"
            content="Our E-Payment Solution and Integrated Services, Offers Quick Online Payment for Goods & Services, Utility Bills, Mobile Top-Ups."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
