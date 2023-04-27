import React from "react";
import QuickLink from "./QuickLink";
import CopyWrite from "./CopyWrite";
import GoToTop from "./GoToTop";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1c2e4a] lg:px-52 md:px-14 px-5 py-16 text-white">
        <GoToTop />
        <div className=" w-full text-center">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-8">Quick Links</h2>
            <div className="w-full xl:w-4/5 xl:flex justify-between items-center mx-auto">
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
        </div>
        <CopyWrite />
      </div>
    </>
  );
};

export default Footer;
