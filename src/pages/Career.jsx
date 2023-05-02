import React from "react";
import CareerHero from "../components/CareerHero";
import CareerJobList from "../components/CareerJobList";
import CareerMission from "../components/CareerMission";

const Career = () => {
  return (
    <div>
      <CareerHero />
      {/* <CareerMission /> */}
      <CareerJobList />
    </div>
  );
};

export default Career;
