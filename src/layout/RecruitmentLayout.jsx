import React from "react";
import { Outlet } from "react-router-dom";
// import CareerNav from "../components/RecruitmentNav";
import RecruitmentNav from "../components/RecruitmentNav";
import Footer from "../components/footer/Footer";

const RecruitmentLayout = () => {
  return (
    <div>
      <RecruitmentNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RecruitmentLayout;
