import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../assets/fatou_jallow.jpg";
import user2 from "../assets/saul.jpg";
import user3 from "../assets/kejaw.jpg";
import user4 from "../assets/testimonialImg3.jpg";
import user5 from "../assets/testimonialImg4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

import { Pagination, Autoplay } from "swiper";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";

const Testimonial = () => {
  return (
    <div
      id="Reviews"
      className="testimonialBg bg-no-repeat bg-cover bg-center lg:px-52 md:px-14 px-5 w-full h-full pt-14 pb-8 text-center"
    >
      <div className="w-3/4 mx-auto">
        <SectionTitle title="Client Opinion" />
        <SectionHeader
          heading="What Users Say About Us"
          className="font-bold"
        />
      </div>
      <Swiper
        slidesPerView={"1"}
        spaceBetween={20}
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
          <TestimonialCard
            image={user1}
            name="Fatou Jallow "
            role="CEO, Takaful Insurance Gambia"
            comment="As a former resident of the UK. Immedi8 Financial Services has been reliable for me when sending money back home. I would recommend them anytime."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user2}
            name="Saul Frazer"
            role=" CEO, Global Properties"
            comment="We have worked with Immedi8 services since 2012 to facilitates some of our clients payments to our head office in The Gambia. They have been very reliable, fast and customer friendly."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user3}
            name="Kejau Touray"
            role="CXO, Fankanta Technology"
            comment="My favorite money transfer services from the UK. Fast and reliable. Immed8 Financial Services has outstanding customer service, and I will not hesitate to recommend their outstanding service to anyone."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
