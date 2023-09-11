import React from "react";
import { Link } from "react-scroll";
import { Dialog } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import Logo from "../Logo";
import TrackTransaction from "../TrackTransaction";
import LoginBtn from "../LoginBtn";
import "../../components/header/style.css";
const navigation = [
  { name: "About", to: "About" },
  //   { name: "Products", to: "#" },
  { name: "Services", to: "Services" },
  { name: "Contact", to: "Contact" },
  { name: "FAQ", to: "FAQ" },
  // { name: "Become an Agent", to: "#" },
];

const NavBar = () => {
  const nav = useRef();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (nav.current && window.pageYOffset >= nav.current.offsetHeight) {
  //       // console.log(nav.current.offsetHeight);
  //       nav.current.classList.add(
  //         "bg-white",
  //         "fixed",
  //         "top-0",
  //         "text-black",
  //         "w-full",
  //         "z-[100]"
  //       );
  //     } else if (nav.current && window.pageYOffset < nav.current.offsetHeight) {
  //       nav.current.classList.remove(
  //         "bg-white",
  //         "fixed",
  //         "top-0",
  //         "text-black",
  //         "w-full",
  //         "z-[100]"
  //       );
  //     }
  //   });
  // }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative bg-white text-[#080145]">
      <nav
        ref={nav}
        className="flex items-center justify-between px-3 "
        aria-label="Global"
      >
        <Logo />
        <TrackTransaction className="hidden md:block" />

        <div className="hidden xl:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-135}
              duration={1000}
              key={item.name}
              to={item.to}
              isDynamic={true}
              className="text-lg cursor-pointer font-semibold leading-6 text-[#080145] hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}
          <li className="list-none">
            <a
              href="/recruitment/become-an-agent"
              className="hover:text-red-600 cursor-pointer text-lg font-semibold leading-6 text-[#080145]"
            >
              Become an Agent
            </a>
          </li>
          {/* <li className="list-none">
            <a
              href="/recruitment/career"
              className="hover:text-red-600 cursor-pointer text-base font-semibold leading-6 text-[#080145]"
            >
              Career
            </a>
          </li> */}
        </div>
        <LoginBtn
          className="hidden md:block mt-[16px] bg-[#080145] text-white"
          line="md:mb-3 lg:mb-5"
        />
        <div className="flex xl:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md  text-gray-700"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className={`xl:hidden`}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className={`fixed inset-0 z-0 w-full `} />
        <Dialog.Panel
          className={`fixed inset-y-0  transition-all duration-1000 ease-cubic-bezier[.42,0,.58,1]  right-0 z-0 w-full overflow-y-auto  bg-white px-3 lg:px-6 md:py-1 lg:py-0 sm:ring-1 sm:ring-gray-900/10  h-[550px] ${
            mobileMenuOpen
              ? " top-[0px] opacity-100 visible z-[60] "
              : "top-[-400px]"
          } `}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="pr-3 rounded-md  text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className={`mt-4 flow-root`}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-165}
                    duration={1000}
                    key={item.name}
                    to={item.to}
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-[#080145] hover:bg-gray-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {item.name}
                  </Link>
                ))}
                <li className="list-none">
                  <a
                    href="/recruitment/become-an-agent"
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-[#080145] hover:bg-gray-300"
                  >
                    Become an Agent
                  </a>
                </li>
                {/* <li className="list-none">
              <a
                href="/career/post"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-300"
              >
                Career
              </a>
            </li> */}
              </div>
              <LoginBtn className="md:hidden" />
              <TrackTransaction className="md:hidden" />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default NavBar;
