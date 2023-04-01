import React, { useEffect } from "react";
import HeroSecondary from "../components/HeroSecondary";
import SectionParagraph from "../components/SectionParagraph";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="policy">
      <HeroSecondary heading="Our Policies" date="March 27, 2023" />
      <div className="space-y-6 lg:px-52 md:px-14 px-5 pt-14 pb-24">
        <h4 className="text-xl font-bold uppercase">Content</h4>
        <SectionParagraph
          content="IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8
          MONEY (“IMMEDI8MONEY.COM”)"
        />
        <SectionParagraph
          content="We are an Authorised Payment Institution
          (API) BY THE Financial Conduct Authority (FCA) under the payment
          Services Regulation 2009 – PSD 584027 For The Provision Of Payment
          Services."
        />
        <SectionParagraph
          content=" We are also an Authoried and Regulated Business With Her
          Majesty Revenue and Customs (HMRC). This is our Policy to comply with
          all goverments regulations at all times."
        />
      </div>
    </div>
  );
};

export default Policy;
