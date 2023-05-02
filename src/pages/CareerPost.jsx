import React from "react";
import { useParams } from "react-router-dom";
import CareerPostHero from "../components/CareerPostHero";
import CareerPostParagraph from "../components/CareerPostParagraph";
import { jobData } from "../utils";

const CareerPost = () => {
  const id = useParams().id;
  let newData;

  jobData.forEach((data) => {
    data.id == id ? (newData = data) : "";
  });

  return (
    <div>
      <CareerPostHero heading={newData.role} date="May 2, 2023" />
      <div className="pt-6 pb-16">
        <CareerPostParagraph heading="vacancy" content="1" />
        <CareerPostParagraph heading="Employment Status" content="Full time" />
        <CareerPostParagraph
          heading="Educational Requirements"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, blanditiis id itaque ipsam quasi porro. Fugit ab est provident nihil tenetur, quae repellat ea perspiciatis inventore explicabo maiores laudantium sit."
        />
        <CareerPostParagraph
          heading="Experience Requirements"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, blanditiis id itaque ipsam quasi porro. Fugit ab est provident nihil tenetur, quae repellat ea perspiciatis inventore explicabo maiores laudantium sit."
        />
        <CareerPostParagraph
          heading="Job Responsibilities"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, blanditiis id itaque ipsam quasi porro. Fugit ab est provident nihil tenetur, quae repellat ea perspiciatis inventore explicabo maiores laudantium sit."
        />
        <CareerPostParagraph heading="Job Location" content="Remote Job" />
        <CareerPostParagraph heading="Salary" content="£2000" />
        <CareerPostParagraph
          heading="Other Benefits"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, blanditiis id itaque ipsam quasi porro. Fugit ab est provident nihil tenetur, quae repellat ea perspiciatis inventore explicabo maiores laudantium sit."
        />
        <div className="text-black lg:px-52 md:px-14 px-5">
          <h3 className="pt-6 text-xl capitalize font-semibold text-[#1c2e4a]">
            Email
          </h3>
          <p className="text-base font-medium text-gray-500">
            Send cv to <span className="text-red-600">example@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPost;
