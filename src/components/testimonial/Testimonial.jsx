import React from "react";
import TestimonialCard from "./TestimonialCard";
// import TestimonialCard from "../TestimonialCard";

import user1 from "../../assets/fatou_jallow.jpg";
import user2 from "../../assets/saul.jpg";
import user3 from "../../assets/kejaw.jpg";
import user4 from "../../assets/testimonialImg3.jpg";
import user5 from "../../assets/testimonialImg4.jpg";
import dot5 from "../../assets/instantAssets/dots5.png";
import dot6 from "../../assets/instantAssets/dot6.png";
import qoute from "../../assets/instantAssets/qoute.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../App.css";

import { Pagination, Autoplay } from "swiper";
import SectionTitle from "../SectionTitle";
import SectionHeader from "../SectionHeader";

const Testimonial = () => {
  return (
    <div
      id="Reviews"
      className="testimonialBg bg-no-repeat bg-cover bg-center xl:px-24 md:px-14 px-5 w-full h-full pt-14 py-16 text-center relative"
    >
      <div className="absolute w-full max-w-sm opacity-20">
        <img src={dot5} alt="dots" />
      </div>
      <div className="absolute bottom-28 right-2 w-full max-w-sm ">
        <img src={qoute} alt="dots" />
      </div>
      <div className="w-3/4 mx-auto">
        <SectionTitle title="Client Opinion" />
        <SectionHeader
          heading="What Users Say About Us"
          className="font-bold"
        />
      </div>
      <div className="w-full flex flex-col items-center md:flex-row md:flex-wrap xl:flex-nowrap  justify-center gap-6 xl:justify-between md:items-center  space-y-10 md:space-y-0 z-50">
        <TestimonialCard
          image={user1}
          name="Fatou Jallow "
          role="CEO, Takaful Insurance Gambia"
          comment="As a former resident of the UK. Immedi8 Financial Services has been reliable for me when sending money back home. I would recommend them anytime."
        />
        <TestimonialCard
          image={user2}
          name="Saul Frazer"
          role=" CEO, Global Properties"
          comment="We have worked with Immedi8 services since 2012 to facilitates some of our clients payments to our head office in The Gambia. They have been very reliable, fast and customer friendly."
        />
        <TestimonialCard
          image={user3}
          name="Kejau Touray"
          role="CXO, Fankanta Technology"
          comment="My favorite money transfer services from the UK. Fast and reliable. Immed8 Financial Services has outstanding customer service, and I will not hesitate to recommend their outstanding service to anyone."
        />
      </div>
      {/* <Swiper
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
      </Swiper> */}
    </div>
  );
};

export default Testimonial;
