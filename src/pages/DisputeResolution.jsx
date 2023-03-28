import React from "react";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import HeroSecondary from "../components/HeroSecondary";
import SectionParagraph from "../components/SectionParagraph";

const DisputeResolution = () => {
  return (
    <div id="dispute-resolution">
      <HeroSecondary heading="Dispute Resolution" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)" />
        <SectionParagraph content="WE ARE AN AUTHORISED PAYMENT INSTITUTION (PI) BY THE FINANCIAL CONDUCT AUTHORITY (FCA) UNDER THE PAYMENT SERVICES REGULATION 2009 – PSD 584027 FOR THE PROVISION OF PAYMENT SERVICES." />
        <SectionParagraph content="WE ARE ALSO AN AUTHORISED AND REGULATED BUSINESS WITH THE HER MAJESTY REVENUE AND CUSTOMS (HMRC)." />
        <SectionParagraph content="THIS IS OUR POLICY TO COMPLY WITH ALL GOVERNMENT REGULATIONS AT ALL TIMES." />
        <SectionParagraph content="IMMEDI8 SERVICES LTD. SHALL EXERCISE ITS BEST EFFORTS TO RESOLVE ANY DISPUTES THAT ARISE BY OUR CUSTOMERS. THE FOLLOWING ESCALATION PROCEDURES WILL BE USED TO RESOLVE ANY ISSUES AND DISPUTES:" />
        <h4>Step 1 – Contact Customer Service</h4>
        <h4>Step 2 – Contact the Management Office</h4>
        <h4>Step 3 – Contact the Chief Executive Officer</h4>
        <SectionParagraph content="If you remain unsatisfied with the resolution of your complaint after following the above escalation process, FCA, HMRC, Consumer Direct, Office of Fair Trading or Financial Ombudsman Service (FOS) may be able to help you." />
        <SectionParagraph content="You can contact the Financial Ombudsman Service at:" />

        <SectionParagraph content="The Financial Ombudsman Service" />

        <ul>
          <li>Address: South Quay Plaza, 183 Marsh Wall London E14 9SR</li>
          <li>Phone: 08000234567 or 03001239123</li>
          <li>E-mail: complaintinfo@financial-ombudsman.org.uk</li>
          <li>Website: www.financial-ombudsman.org.uk</li>
        </ul>
        <SectionParagraph content="Financial Ombudsman Service will only deal with complaints about problems that occurred within the UK or acts and omission by the FCA authorised payment service provider within the EEA. If you have a complaint about problems that occurred outside the UK and/or acts and omission by a non-FSA authorised entity, you may refer your complaint to the local ombudsman where the problem occurred and follow the local out of court and redress procedures to register your complaint.COMPLIANCE PROGRAM We are required to maintain a compliance program containing adequate policies and procedures in accordance with the applicable regulations. For more information, refer to FCA and FATF websites:" />

        <SectionParagraph content="Any dispute or claim arising from or relating to a Money Transfer conducted by us that involves a claim by Sender for less than $10,000, exclusive of interest, arbitration fees and costs, can be settled by arbitration administered by the UK Advisory, Conciliation & Arbitration Service (“ACAS”) under its Arbitration Rules for the Resolution of Consumer Related Disputes." />
        <SectionParagraph content="Any other dispute or claim arising from or relating to this Money Transfer shall be settled by arbitration administered by the ACAS under its Commercial Arbitration Rules, with such arbitration to be held in the most populous city in the province from which the Money Transfer was sent, or in such other location as the parties may mutually agree. Each party shall bear its own lawyer, expert and witness fees, which shall not be considered costs of arbitration. Judgment on any award rendered by the arbitrator may be entered in and enforced by any court having jurisdiction thereof." />
        <SectionParagraph content="The parties agree that neither of them shall have the right to participate as a representative or a member of any class of claimants pertaining to any claim subject to arbitration under this paragraph and that claims of third parties shall not be joined in any arbitration between the parties. If any portion of this paragraph is deemed invalid or unenforceable, it shall not invalidate the remaining portions of this paragraph." />
        <SectionParagraph content="THE PARTIES ACKNOWLEDGE AND AGREE THAT, EXCEPT AS EXPRESSLY PROVIDED IN THIS PARAGRAPH, THEY ARE WAIVING ALL RIGHTS TO A TRIAL BY COURT OR JURY AS A MEANS OF RESOLVING ANY DISPUTES ARISING OUT OF OR RELATING TO THIS MONEY TRANSFER." />
        <p className="lowercase">
          HE PARTIES ACKNOWLEDGE AND AGREE THAT, EXCEPT AS EXPRESSLY PROVIDED IN
          THIS PARAGRAPH, THEY ARE WAIVING ALL RIGHTS TO A TRIAL BY COURT OR
          JURY AS A MEANS OF RESOLVING ANY DISPUTES ARISING OUT OF OR RELATING
          TO THIS MONEY TRANSFER
        </p>
      </div>
      <GoToTop />
      <Footer />
    </div>
  );
};

export default DisputeResolution;
