import React from "react";
import { Outlet } from "react-router-dom";
import CareerNav from "../components/CareerNav";
import Footer from "../components/Footer";

const CareerLayout = () => {
  return (
    <div>
      <CareerNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CareerLayout;
