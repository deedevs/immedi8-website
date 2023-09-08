import React from "react";
import RecruitmentHero from "../components/RecruitmentHero";
import RecruitmentNav from "../components/RecruitmentNav";
import AgentForm from "./AgentForm";

const BecomeAnAgent = () => {
  return (
    <div>
      <RecruitmentNav />
      <RecruitmentHero />
      <AgentForm />
    </div>
  );
};

export default BecomeAnAgent;
