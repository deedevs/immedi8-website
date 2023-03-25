import React from "react";
import iPayLogo from "../assets/iPayLogo.png";
import klarna from "../assets/klarna.jpg";
import jcbLogo from "../assets/jcbLogo.png";
import visa from "../assets/visa.jpg";
import masterCard from "../assets/masterCard.png";
import maestro from "../assets/maestro.png";
import americanExpress from "../assets/americanExpress.png";
import sofort from "../assets/sofort.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import PaymentLogo from "./PaymentLogo";

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className="bg-white text-[#1c2e4a] w-[60%] h-auto mx-auto p-8 shadow-lg shadow-[#1c2e4a]"
    >
      <Swiper
        slidesPerView={"4"}
        spaceBetween={50}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className=".swiper"
      >
        <SwiperSlide>
          <PaymentLogo logo={visa} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={masterCard} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={iPayLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={americanExpress} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={maestro} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={jcbLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={klarna} />
        </SwiperSlide>
        <SwiperSlide>
          <PaymentLogo logo={sofort} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
