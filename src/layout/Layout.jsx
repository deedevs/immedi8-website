import React, { useState, useEffect, useRef } from "react";
import LoginBtn from "../components/LoginBtn";
import Logo from "../components/Logo";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [bgState, setBgState] = useState("black");

  const nav = useRef();
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Privacy", to: "/docs/privacy" },
    { name: "Compliance", to: "/docs/aml-and-compliance" },
    { name: "Terms", to: "/docs/terms-and-conditions" },
    { name: "Resolution", to: "/docs/dispute-resolution" },
    { name: "Refund", to: "/docs/refund-policy" },
    { name: "Complaint", to: "/docs/complaint-policy" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (nav.current && window.pageYOffset >= nav.current.offsetHeight) {
        nav.current.classList.add(
          "bg-white",
          "fixed",
          "text-black",
          "w-full",
          "z-[100]"
        );
        setBgState("white");
      } else if (nav.current && window.pageYOffset < nav.current.offsetHeight) {
        nav.current.classList.remove(
          "bg-white",
          "fixed",
          "text-black",
          "w-full",
          "z-[100]"
        );
        setBgState("black");
      }
    });
  }, []);
  return (
    <div>
      <nav
        ref={nav}
        className="bg-gradient-to-t from-[#1c2e4a] to-black bg-blend-overlay py-5 md:px-14 px-5 bg-transparent text-white shadow-md block"
      >
        <div className="md:flex items-center justify-between">
          <Logo />
          <div
            className=" absolute right-6 top-[65px] xl:hidden"
            onClick={() => setOpen(!open)}
          >
            <i
              className={`fa-solid fa-2x xl:fa-3x cursor-pointer ${
                open ? "fa-xmark" : "fa-bars"
              } ${bgState == "white" ? "text-black" : "text-white"}`}
            ></i>
          </div>

          <ul
            className={`xl:flex xl:items-center xl:space-x-5 xl:space-y-0 space-y-4 text-xl
         xl:pb-0 pb-5 xl:pt-0 pt-8 absolute xl:static xl:z-10 z-[1] left-0 w-full xl:w-auto xl:pl-0 pl-9 xl:mt-0 xl:bg-inherit  transition-all duration-500 ease-in ${
           open ? "top-[140px] opacity-100 z-[1]" : "top-[-490px]"
         } ${
              bgState === "white"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/docs/policy">Policy</Link>
            </li>
            <li>
              <Link to="/docs/aml-and-compliance">Complaint</Link>
            </li>
            <li>
              <Link to="/docs/terms-and-conditions">Terms</Link>
            </li>
            <li>
              <Link to="/docs/dispute-resolution">Resolution</Link>
            </li>
            <li>
              <Link to="/docs/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/docs/refund-policy">Refund</Link>
            </li>
            <li>
              <Link to="/docs/complaint-policy">Complaint</Link>
            </li>
          </ul>
          <LoginBtn className="hidden xl:block" />
        </div>
      </nav>

      <main>{<Outlet />}</main>
    </div>
  );
};

export default Layout;
