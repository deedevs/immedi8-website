import React from "react";

import ipay from "../assets/icons/newiPay.png";
import iFx from "../assets/icons/newIFx.png";
import iPower from "../assets/icons/newiPower.png";
import iTopUp from "../assets/icons/newTopUp.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import PaymentLogo from "./PaymentLogo";

const Payments = ({ className }) => {
  return (
    <div
      className={`bg-white text-[#080145] border-none rounded-b-lg w-[90%] md:w-[90%] lg:w-[90%] h-auto mx-auto px-8 py-6 shadow-lg z-20 shadow-[#080145] absolute ${className}`}
    >
      <h4 className="pb-5 text-base md:text-2xl text-red-600 lg:text-3xl font-bold text-center">
        Meet Our Global Products
      </h4>
      <Swiper
        slidesPerView={"4"}
        spaceBetween={25}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className=".swiper"
      >
        {/* <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={logo} />
        </SwiperSlide> */}
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={ipay} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iFx} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iTopUp} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iPower} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iFx} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iTopUp} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={ipay} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={iPower} />
        </SwiperSlide>
        {/* <SwiperSlide className=" w-full mx-auto">
          <PaymentLogo logo={logo} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={logo} />
        </SwiperSlide>
        <SwiperSlide className="w-full mx-auto">
          <PaymentLogo logo={logo} />
        </SwiperSlide> */}
      </Swiper>
      <h3 className="text-center text-lg md:text-2xl lg:text-3xl mt-2 text-red-600">
        Your Fastest Growing FinTech Services Provider
      </h3>
      <h4 className="text-center text-base md:text-lg lg:text-xl text-[#1b2c46] font-extrabold">
        We Are FinTech, It's In Our DNA
      </h4>
    </div>
  );
};

export default Payments;
