import React, { useEffect } from "react";
import HeroSecondary from "../components/HeroSecondary";
import SectionParagraph from "../components/SectionParagraph";

const ComplaintPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
      <HeroSecondary heading="AML and Compliance" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)" />
        <SectionParagraph content="WE ARE AN AUTHORISED PAYMENT INSTITUTION (API) BY THE FINANCIAL CONDUCT AUTHORITY (FCA) UNDER THE PAYMENT SERVICES REGULATION 2009 – PSD 584027 FOR THE PROVISSION OF PAYMENT SERVICES." />

        <SectionParagraph content="WE ARE ALSO AN AUTHORISED AND REGULATED BUSINESS WITH HER MAJESTY REVENUE AND CUSTOMS (HMRC)." />
        <SectionParagraph content="THIS IS OUR POLICY TO COMPLY WITH ALL GOVERNMENT REGULATIONS AT ALL TIMES." />
        <SectionParagraph content="AS A MONEY SERVICE BUSINESS, WE ARE SUBJECT TO THE FOLLOWING REGULATIONS: REPORTING We are required to report the following types of transactions to the authorities:" />
        <SectionParagraph content="Suspicious Activity (SAR) RECORD KEEPING We are required to keep all client, transaction and corporate records for a minimum of 5 years." />
        <SectionParagraph content="ASCERTAINING IDENTITY We are required to collect and verify your identification for remittances of £1,000 and more." />
        <SectionParagraph content="Suspicious Activity (SAR) RECORD KEEPING We are required to keep all client, transaction and corporate records for a minimum of 5 years." />
        <SectionParagraph
          content="THIRD PARTY DETERMINATION If you are conducting a transaction on someone else’s behalf,
          we are required to obtain information on the both parties: you and the person on whose behalf you are conducting the transaction."
        />
        <SectionParagraph content="COMPLIANCE PROGRAM We are required to maintain a compliance program containing adequate policies and procedures in accordance with the applicable regulations. For more information, refer to FCA and FATF websites:" />

        <ul className="leading-6 text-sm md:text-lg text-blue-500 mb-4 ml-4">
          <li>
            <a href="http://www.fca.org.uk/">http://www.fca.org.uk/</a>
          </li>
          <li>
            <a href="http://www.fatf-gafi.org/">http://www.fatf-gafi.org/</a>
          </li>
        </ul>
        <SectionParagraph content="ADDITIONAL MEASURES WE TAKE TO PREVENT MONEY LAUNDERING AND TERRORIST FINANCING." />
        <SectionParagraph content="WE TAKE THE FOLLOWING ADDITIONAL MEASURES TO PREVENT MONEY LAUNDERING AND TERRORIST FINANCING:" />
        <SectionParagraph content="SCANNING AGAINST THE HM TREASURY WATCH LIST" />
        <SectionParagraph content="It is our policy to check each transaction against the HM Treasury watch list. Any matched names are subject to further review by the compliance officer." />
        <SectionParagraph content="TRANSACTION MONITORING" />
        <SectionParagraph content="We have adequate controls pertaining to the transaction activity at several instances of the life cycle of a transaction. These controls include:" />

        <ul className="leading-6 text-sm md:text-lg text-gray-500 mb-4 ml-4">
          {items.map((item, index) => (
            <li className="list-disc list-inside" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplaintPolicy;
