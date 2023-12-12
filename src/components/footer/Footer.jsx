import React from "react";
import { Link } from "react-scroll";
import QuickLink from "../QuickLink";
import CopyWrite from "../CopyWrite";
import GoToTop from "../GoToTop";
import SocialLink from "../SocialLink";
import Map from "../Map";

import logo from "../../assets/instantAssets/instantLogoBg.jpg";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  const navigation = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    //   { name: "Products", to: "#" },
    { name: "Services", to: "Services" },
    { name: "Contact", to: "Contact" },
    { name: "FAQ", to: "FAQ" },
    // { name: "Become an Agent", to: "#" },
  ];
  return (
    <>
      <div className="footer-gradient xl:px-24 2xl:px-52 md:px-14 px-5 py-16 text-white">
        <GoToTop />
        <div className="md:flex md:items-center md:justify-between md:gap-6 lg:gap-0 sm:px-12 px-4 bg-[#ffffff19] py-7 ">
          <p className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal md:w-2/5 font-bold text-gradient">
            Sign Up For A Free Account
          </p>
          <form action="#" className="">
            <div className="w-full flex align-middle">
              <input
                type="text"
                placeholder="Enter your phone number"
                className="p-2 md:px-4 md:py-3 rounded-l-3xl text-black outline-none border border-blue-950 flex-1 w-[90%] lg:w-full"
              />
              <button
                type="submit"
                className="bg-[#b90000] text-white p-2 md:px-3 md:py-3 rounded-r-3xl text-lg outline-none border-none"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-5 gap-10 py-16">
          <div className="">
            <div>
              <img src={logo} alt="logo image" className="w-full" />
            </div>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolorem ad amet porro aspernatur distinctio facilis earum incidunt
              ipsa quasi minus sequi asperiores itaque a perspiciatis, debitis
              vel nostrum tempora.
            </p>
          </div>
          <div className="">
            <h4 className="text-2xl font-bold">Navigations</h4>
            <ul className="mt-3 space-y-2">
              {navigation.map((item) => (
                <li className="">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-135}
                    duration={1000}
                    key={item.name}
                    to={item.to}
                    isDynamic={true}
                    className="cursor-pointer text-white hover:text-red-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="list-none">
                <a
                  href="/recruitment/become-an-agent"
                  className="hover:text-red-600 cursor-pointer text-white"
                >
                  Become an Agent
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl font-bold">Support Links</h4>
            <div className="mt-3">
              <QuickLink section="Policy" to="/docs/policy" />
              <QuickLink
                section="AML and Compliance"
                to="/docs/aml-and-compliance"
              />
              <QuickLink
                section="Terms and conditions"
                to="/docs/terms-and-conditions"
              />
              <QuickLink
                section="Dispute Resolution"
                to="/docs/dispute-resolution"
              />
              <QuickLink section="Privacy" to="/docs/privacy" />
              <QuickLink section="Refund Policy" to="/docs/refund-policy" />
              <QuickLink
                section="Complaint Policy"
                to="docs/complaint-policy"
              />
            </div>
          </div>
          <div className="sm:col-span-3 2xl:col-span-2">
            <Map />
          </div>
        </div>
        <div className="w-full space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
          <div className="flex gap-6 items-center justify-center">
            <SocialLink
              img={facebook}
              url="https://www.facebook.com/immedi8finance"
            />
            <SocialLink
              img={linkedin}
              url="https://www.linkedin.com/company/immedi8-services/mycompany/?viewAsMember=true"
            />
            <SocialLink
              img={instagram}
              url="https://www.instagram.com/immedi8/"
            />
            <SocialLink img={twitter} url="https://twitter.com/immedi8money" />
            {/* <SocialLink img={whatsapp} url={} /> */}
            {/* <SocialLink img={youtube}url={} /> */}
          </div>
          <CopyWrite />
        </div>
      </div>
    </>
  );
};

export default Footer;
