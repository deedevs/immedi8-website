import React from "react";
import logo from "../assets/logo.png";
import FooterLink from "./FooterLink";
import QuickLink from "./QuickLink";
import CopyWrite from "./CopyWrite";
import GoToTop from "./GoToTop";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1c2e4a] lg:px-52 md:px-14 px-5 py-16 text-white">
        <GoToTop />
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-10 w-full">
          <div className=" p-4 text-start">
            <div className="lg:w-[250px] md-w-[80px] h-[150px] mx-auto md:mx-0 mb-8">
              <img src={logo} alt="" srcSet="" className="object-contain " />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              suscipit doloribus porro voluptatem similique ullam magnam alias!
              Sequi.
            </p>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Navigations</h2>
            <div>
              <FooterLink section="Home" to="Home" />
              <FooterLink section="About" to="About" />
              <FooterLink section="Products" to="Products" />
              <FooterLink section="Regulators" to="Regulators" />
              <FooterLink section="Contact" to="Contact" />
              <FooterLink section="FAQ" to="FAQ" />
              <FooterLink section="Reviews" to="Reviews" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
            <div>
              <QuickLink section="Policy" to="/policy" />
              <QuickLink
                section="AML and Compliance"
                to="/aml-and-compliance"
              />
              <QuickLink
                section="Terms and conditions"
                to="/terms-and-conditions"
              />
              <QuickLink
                section="Dispute Resolution"
                to="/dispute-resolution"
              />
              <QuickLink section="Privacy" to="privacy" />
              <QuickLink section="Refund Policy" to="refund-policy" />
              <QuickLink section="Complaint Policy" to="complaint-policy" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Navigations</h2>
            <div>
              <FooterLink section="Home" />
              <FooterLink section="About" />
              <FooterLink section="Products" />
              <FooterLink section="Regulators" />
              <FooterLink section="Contact" />
              <FooterLink section="FAQ" />
              <FooterLink section="Reviews" />
            </div>
          </div>
        </div>
        <CopyWrite />
      </div>
    </>
  );
};

export default Footer;
