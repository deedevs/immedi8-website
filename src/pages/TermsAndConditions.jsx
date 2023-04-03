import React, { useEffect } from "react";
import TermsAccordion from "../components/TermsAccordion";
import HeroSecondary from "../components/HeroSecondary";
import SectionParagraph from "../components/SectionParagraph";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const items = [
    {
      title: "FEES, PAYMENT AND CURRENCY EXCHANGE",
      content:
        "Transfer Fees. In consideration for the use of the Service, you agree to pay to Immedi8 Services Ltd. (“immedi8money.com”) a fee for each Money Transfer initiated by you at the applicable rate then in effect (the “Transfer Fee”). The applicable Transfer Fee for your transaction will be provided to you prior to your final authorization of the transaction, in addition to any applicable fees for additional services.",
    },
    {
      title: "Currency Exchange",
      content:
        "All payments will be made in the currency of the destination country (except in a limited number of instances where payment can be made in the sending currency). In addition to the transfer fees applicable to this transaction, a currency exchange rate will be applied. British Pound is converted to foreign currency at an exchange rate set by Immedi8 Services Ltd. (“immedi8money.com”). Any difference between the rate given to customers and the rate received by Immedi8 Services Ltd. (“immedi8money.com”) will be kept by Immedi8 Services Ltd. (“immedi8money.com”) (and, in some cases, its international agents) in addition to the Transfer Fees. Any refund in the event of non-payment will be made at the applicable exchange rate as described above in effect at the time of reconversion into British Pound. For information concerning the current currency exchange rates provided by Immedi8 Services Ltd. (“immedi8money.com”) to its customers call +44 0208 475 0759.",
    },
    {
      title: "Payment",
      content:
        "Transfer fees and the principal amount are due and payable before Immedi8 Services Ltd. (“immedi8money.com”) processes the transaction. You must pay for the Service with your Payment Method. If Immedi8 Services Ltd. (“immedi8money.com”) does not receive authorization from the Payment Method issuer, the transaction will be not be processed and funds will not be transmitted to the Receiver. Immedi8 Services Ltd. (“immedi8money.com”) assumes no liability for damages resulting from or arising out of non-payment of the Money Transfer by reason of non-receipt of authorization from the Payment Method issuer. Each time you use the Service you agree that Immedi8 Services Ltd. (“immedi8money.com”) is authorized to charge your designated Payment Method account for the principal amount, the transfer fee and any other applicable fees. (Your agreement with your Payment Method issuer governs use of your Payment Method, and you must refer to that agreement to ascertain your rights and liabilities as a user of your Payment Method, which may include a “cash advance” fee.",
    },
    {
      title: "REFUNDS",
      content:
        "REFUNDS OF PRINCIPAL AMOUNT and cancellation of the Money Transfer will be made upon written request of the Sender if payment to the Receiver has not yet been made at the time the request is processed by Immedi8 Services Ltd. (“immedi8money.com”). Refunds will be made within 45 days of receipt of a valid written request from the Sender. \
        REFUNDS OF FEES will be made upon written request of the Sender if the Money Transfer is not available to the Receiver within the time specified by Immedi8 Services Ltd. (“immedi8money.com”) for the selected service, subject to the business hours of the location selected by the Receiver for payment and other special conditions. Refunds will be made within 45 days of receipt of a valid written request from the Sender.",
    },
    {
      title: "SPECIAL SERVICES",
      content:
        "TELEPHONE NOTIFICATION to the Receiver that the Money Transfer is available for pick up is offered in The United Kingdom and certain international destinations.MESSENGER DELIVERY of a Money Transfer cheque is available to selected international destinations. SUPPLEMENTAL MESSAGES may be included with domestic and most international Money Transfers.",
    },
    {
      title: "ADMINISTRATION CHARGE ",
      content:
        "If a Money Transfer is not picked up by the Receiver or is not cancelled by the Sender prior to pick up within one (1) year of the date it was sent, there will be a non-refundable administration charge where permitted by law. The administration charge will be deducted from the principal amount of the Money Transfer. The administration charge is ONE (1) British Pound per month from the date the Money Transfer was sent, but not more than Twenty Five (25) British Pounds.",
    },
    {
      title: "RESOLUTION OF DISPUTES",
      content:
        "Immedi8 Services ltd. Shall exercise its best efforts to resolve any disputes that arise from our customers.",
    },
  ];
  return (
    <div id="terms-and-conditions">
      <HeroSecondary heading="Terms And Conditions" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph
          content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)

          "
        />
        <SectionParagraph content="AUTHORIZED FINANCIAL SERVICE IS SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS:" />
        <SectionParagraph content="In the event there is any inconsistency between the English version of our web site and any other language version, the English version shall be binding." />
        <SectionParagraph content="An Immedi8 Services Ltd. (“immedi8money.com”) Money Transfer customer (the “Sender”) may send a Money Transfer to a designated receiver (the “Receiver”) anywhere in the world where Immedi8 Services Ltd. (“immedi8money.com”) offers its services over the Internet (the “Service”) using Sofort banking or any other electronic payment method (“Payment Method”). Money Transfers will normally be paid to the Receiver in cash or bank deposit. Money Transfers are available for pick up by the Receiver promptly after validation of Sender information which may take up to 24 hours, on a “Will Call” basis, at Immedi8 Services Ltd. (“immedi8money.com”) agent locations in the destination country. Certain money transfer services, transfers that exceed certain principal amounts, and/or transfers to certain destinations may take longer or be subject to additional restrictions." />
        <SectionParagraph content="For certain international destinations, a Test Question is required to be provided for some or all Money Transfers to that destination, and in those destinations, the Receiver may be required to provide either proper identification or the correct answer to the Test Question, or both, to receive payment. Please contact Immedi8 Services Ltd. (“immedi8money.com”) at the Customer Service telephone number listed below for current information regarding the availability of Test Questions for your selected destination. Immedi8 Services Ltd. (“immedi8money.com”) reserves the right to limit the principal amount of a Money Transfer, or to decline to accept or pay any Money Transfer that it or its agents determine in their sole discretion violates any applicable law or Immedi8 Services Ltd." />
        <SectionParagraph content="Please contact Immedi8 Services Ltd. (“immedi8money.com”) at the Customer Service telephone number listed below for current information regarding the conditions applicable to the service you have selected or your expected payment location." />
        <SectionParagraph content="When required by applicable law, Money Transfers sent or received in The United Kingdom will be reported to federal, provincial, local and/or foreign authorities. You will be required to provide Immedi8 Services Ltd. (“immedi8money.com”) with certain information to allow us, among other things: to verify your identity; to receive appropriate Payment Method authorization; and/or to complete the transaction. Please refer to Immedi8 Services Ltd. (“immedi8money.com”)’s Online Privacy Statement for information concerning Immedi8 Services Ltd. (“immedi8money.com”) use of this and other personal information." />

        <TermsAccordion items={items} />
        <SectionParagraph content="THE FOLLOWING ESCALATION PROCEDURES WILL BE USED TO RESOLVE ANY ISSUES AND DISPUTES:" />
        <h4 className="leading-6 text-sm md:text-lg text-gray-600 mb-4 ml-4">
          Step 1 – Contact Customer Service
        </h4>
        <h4 className="leading-6 text-sm md:text-lg text-gray-600 mb-4 ml-4">
          Step 2 – Contact the Management Office
        </h4>
        <h4 className="leading-6 text-sm md:text-lg text-gray-600 mb-4 ml-4">
          Step 3 – Contact the Office of the President
        </h4>
        <SectionParagraph content="If you remain unsatisfied with the resolution of your complaint after following the above escalation process," />

        <div className="text-center">
          <p className="text-xl text-gray-600">
            FCA, <br />
            HMRC, <br />
            Consumer Direct, <br /> Office of Fair Trading <br /> or Financial
            Ombudsman Service (FOS) <br />
            may be able to help you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
