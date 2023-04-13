import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../assets/testimonialImg.jpg";
import user2 from "../assets/testimonialImg1.jpg";
import user3 from "../assets/testimonialImg2.jpg";
import user4 from "../assets/testimonialImg3.jpg";
import user5 from "../assets/testimonialImg4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

import { Pagination, Autoplay } from "swiper";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import SectionParagraph from "./SectionParagraph";

const Testimonial = () => {
  return (
    <div
      id="Reviews"
      className="testimonialBg bg-no-repeat bg-cover bg-center lg:px-52 md:px-14 px-5 w-full h-full pt-14 pb-8 text-center"
    >
      <div className="w-3/4 mx-auto">
        <SectionTitle title="Client Opinion" />
        <SectionHeader heading="What Users Say About Us" />
      </div>
      <Swiper
        slidesPerView={"2"}
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
            name="Jean Johnson"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user2}
            name="Alex Smith"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user3}
            name="Mariama Darboe"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user4}
            name="Omar Jeng"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={user5}
            name="Ousman Touray"
            role="Developer"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        aliquam dolore harum vitae et, sapiente aspernatur amet deserunt
        tempora."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
