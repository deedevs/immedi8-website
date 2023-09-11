import React from "react";
import RecruitmentHero from "../components/RecruitmentHero";
import CareerJobList from "../components/CareerJobList";
import CareerMission from "../components/CareerMission";

const Career = () => {
  return (
    <div>
      <RecruitmentHero />
      {/* <CareerMission /> */}
      <CareerJobList />
    </div>
  );
};

export default Career;
