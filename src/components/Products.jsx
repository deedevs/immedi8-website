import React from "react";
import SectionHeader from "./SectionHeader";
import { SectionParagraph } from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import iMoney from "../assets/iMoney.png";
import iPay from "../assets/iPay.png";
import iFx from "../assets/iFx.png";
import iLoan from "../assets/iLoan.png";
import iWallet from "../assets/iWallet.png";

import Card from "./ProductCard";

const Products = () => {
  return (
    <div className="bg-[#1c2e4a] text-white lg:px-52 md:px-14 px-5 pt-14 pb-24">
      <div className="text-center w-2/3 mx-auto">
        <SectionTitle title="Our Products" />
        <SectionHeader heading="Meet our Products" />
        <SectionParagraph content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sequi voluptatem nulla modi nemo explicabo voluptates. Voluptatibus, fugit velit, ipsa cumque alias ipsum magnam sed voluptas, ea tempora mollitia quia?" />
      </div>
      <div className="space-y-5 md:space-y-0 md:grid gap-10 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 pt-16">
        <Card
          image={iMoney}
          title="Money Transfer"
          description="Fast, Secure, Simple & Reliable Money Transfer Services across the Globe. In Over 190 Countries. Send & Receive with us today. You will join the Testimonies."
        />
        <Card
          image={iPay}
          title="Mobile Top-Up, Bills, Goods & Services"
          description="Queuing in order to pay Bills, Mobile Airtime Top-up, Goods & Services is probably one of the worst experience ever. I-Pay offers you 24/7, at your own comfort to pay. Be in control and initiate your payment, hassle free, thanks to our thousands of partnership."
        />

        <Card
          image={iFx}
          title="Foreign Exchange Services"
          description="Foreign Currency at an unbeatable price. no more worries, Deal on the spot or Hedge for your preferable Rate/Date. online or Call us."
        />
        <Card
          image={iLoan}
          title="Quick Loans"
          description="Quick accessible Loan for your everyday need. take a quick short-term loan at very low fees and no guarantees required."
        />
        <Card
          image={iWallet}
          title="Mobile Wallet"
          description="Mobile Wallet for all your transaction. the 21st Century is the Era of Technology. No one needs to carry cash or a physical wallet anymore. Sign up on our digital wallet(I-Wallet) on all your devices to save your cash, and execute your transactions"
        />
      </div>
    </div>
  );
};

export default Products;
