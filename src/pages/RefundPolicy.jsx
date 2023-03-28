import React from "react";
import SectionParagraph from "../components/SectionParagraph";
import HeroSecondary from "../components/HeroSecondary";
import Footer from "../components/Footer";

const RefundPolicy = () => {
  return (
    <div id="refund-policy">
      <HeroSecondary heading="Refund Policy" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)" />
        <h3 className="text-lg font-semibold">
          WE ARE SUBJECT TO THE FOLLOWING REFUND POLICY:
        </h3>

        <h3 className="text-lg font-semibold">REFUNDS OF PRINCIPAL AMOUNT</h3>

        <p className="text-gray-600 text-lg">
          Refund of Principal Amount and cancellation of the Money Transfer will
          be made upon written request of the Sender if payment to the Receiver
          has not yet been made at the time the request is processed by Immedi8
          Services Ltd. (“immedi8money.com”). Refunds will be made within 45
          days of receipt of a valid written request from the Sender.
        </p>

        <h3 className="text-lg font-semibold">REFUNDS OF PRINCIPAL AMOUNT</h3>
        <p className="text-gray-600 text-lg">
          Refund of Fees will be made upon written request of the Sender if the
          Money Transfer is not available to the Receiver within the time
          specified by Immedi8 Services Ltd. (“immedi8money.com”) for the
          selected service, subject to the business hours of the location
          selected by the Receiver for payment and other special conditions.
          Refunds will be made within 45 days of receipt of a valid written
          request from the Sender.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
