import React from "react";
import HeroSecondary from "./HeroSecondary";
import SectionParagraph from "./SectionParagraph";

const ComplaintPolicy = () => {
  const items = [
    "Client Profiling.",
    "Risk Assessment.",
    "Client Identification Controls & Validations.",
    "Transaction Aggregation Thresholds.",
    "Government Reporting Controls & Validations.",
    "Possible Structuring Reporting.",
    "Enhanced Due Diligence Reporting.",
  ];
  return (
    <div id="complaint-policy">
      <HeroSecondary heading="Complaints Procedure" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)" />
        <h4 className="text-sm md:text-lg uppercase">1. Aims</h4>
        <SectionParagraph content="In Addition to our utmost endeavors to providing the best services at all times, we are also committed to upholding all regulatory requirements, fulfilling our customer need and protecting their rights. In a situation where you the customer is dissatisfied; please follow this procedure to have us resolve your complaint as soon as we can." />
        <h4 className="text-sm md:text-lg uppercase">
          2. Reasons For The Procedure
        </h4>

        <SectionParagraph content="Provide the best customer service to the clients and fulfilling our regulatory requirements." />

        <h4 className="text-sm md:text-lg uppercase">3. Objectives</h4>
        <ul className="leading-6 text-sm md:text-lg text-gray-500 mb-4 ml-4">
          <li>
            3.1. To describe the formal procedure of dealing fairly and
            consistently with customer complaints.
          </li>
          <li>
            3.2. To inform customers of the route by which they can express a
            complaint.
          </li>
          <li>
            3.3. To inform staff of the complaints procedure so that they know
            what to do if a customer complaint arises.
          </li>
        </ul>
        <h4 className="text-sm md:text-lg uppercase">4. Procedures</h4>
        <SectionParagraph content="Customers should try to resolve the matter directly with Immedi8 Money" />

        <ul className="leading-6 text-sm md:text-lg text-gray-500 mb-4 ml-4">
          <li>
            4.1. STEP 1
            <SectionParagraph content="To help us investigate and resolve Clients complaint, our standard complaint form will need to be completed, and this can be found on our website or on demand from any of our agents or branch location." />
            <SectionParagraph content="You are required to supply the following information on the form Your name and address Daytime telephone number Time you prefer us to contact you" />
            <SectionParagraph content="Your 12-digit transaction reference number" />
            <SectionParagraph content="Details of your complaint How you want your complaint to be resolved" />
          </li>
          <li>
            4.2. STEP 2
            <SectionParagraph content="If Step 1 did not resolve the complaint, the customer should make a complaint in writing to the Complaint Quality Assurance Manager at Immedi8 Services, contact details below." />
            <SectionParagraph content="Quality Assurance Manager Immedi8 Services Ltd Imperial House 2 Heigham Road, London, E6 2JG" />
            <SectionParagraph content="Email: Complaints@immedi8services.com" />
            <SectionParagraph content="The Quality Assurance Manager will log the complaint and acknowledge its receipt within 3 working days of receiving the complaint." />
            <SectionParagraph content="The Quality Assurance Manager will forward the complaint, with an investigation form clearly identifying the timescales, to the relevant investigating manager who will conduct a full investigation" />
          </li>
        </ul>

        <h4 className="text-sm md:text-lg uppercase">
          5. If The customer is still unhappy.
        </h4>

        <SectionParagraph content="Our aim is to resolve all complaints fairly and promptly. However, in the unlikely event that the matter is still not resolved to the customer’s satisfaction, or if 8 weeks passed since you first brought your complaint to our attention, you have the right to refer your complaint to the Financial Ombudsman Service. If you want the Financial Ombudsman Service to look into your complaint, you must contact them within six months of the date of any final response issued. You can write to them at:" />
        <SectionParagraph content="The Financial Ombudsman Services" />
        <div className="leading-6 text-sm md:text-lg text-gray-600 mb-4">
          <h4>Company: IMMEDI8 SERVICES LTD.</h4>
          <h4>
            South Quays Plaza <br />
            183 Marsh Wall
            <br /> London E14 9SR
          </h4>
          <h4>Email: complaint.info@financial-ombudsman.org.uk</h4>
          <h4>
            Website:{" "}
            <a
              className="text-blue-500 visited:text-blue-800"
              href="www.financial-ombudsman.org.uk"
            >
              www.financial-ombudsman.org.uk
            </a>
          </h4>
        </div>
        <SectionParagraph content="The Financial Ombudsman Service (FOS) will only consider your complaint once you tried to resolve it with us, so please first raise your concerns with us and we’ll do all we can to help. Customers from countries other than the UK may have another local ombudsman or different out of court and redress procedures." />
        <h4 className="text-sm md:text-lg uppercase">6. Responsibility</h4>
        <SectionParagraph content="The Quality Assurance Manager is responsible for ensuring that all customer complaints are dealt with promptly, fairly and consistently and in accordance with this procedure. The investigating manager is responsible for conducting a full, documented, investigation and providing a written response to the Quality Assurance Manager" />
        <SectionParagraph content="This procedure was reviewed and revised January 2012" />
        <p className="leading-6 text-sm md:text-lg text-gray-600 mb-4">
          Signed: Fatou Ceesay <br /> Date: 31st January 2018 <br /> Position:
          Director{" "}
        </p>
      </div>
    </div>
  );
};

export default ComplaintPolicy;
