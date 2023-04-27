import React from "react";
import CareerHero from "../components/CareerHero";
import CareerJobList from "../components/CareerJobList";
import CareerMission from "../components/CareerMission";
import NavBar from "../components/NavBar";

const Career = () => {
  return (
    <div>
      <NavBar />
      <CareerHero />
      <CareerMission />
      <CareerJobList />
    </div>
  );
};

export default Career;
