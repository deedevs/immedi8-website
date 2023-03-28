import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import Accordion from "./Accordion";

const FAQ = () => {
  const items = [
    {
      title: "How to send money",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta ipsum mollitia id maxime iure reiciendis nostrum maiores sequi autem sapiente ipsam a praesentium odit magnam voluptatibus, debitis, amet natus.",
    },
    {
      title: "How to send money",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta ipsum mollitia id maxime iure reiciendis nostrum maiores sequi autem sapiente ipsam a praesentium odit magnam voluptatibus, debitis, amet natus.",
    },
    {
      title: "How to send money",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta ipsum mollitia id maxime iure reiciendis nostrum maiores sequi autem sapiente ipsam a praesentium odit magnam voluptatibus, debitis, amet natus.",
    },
  ];
  return (
    <div
      id="FAQ"
      className="bg-[#1c2e4a] text-white lg:px-52 md:px-14 px-5 pt-14 pb-24 text-center"
    >
      <div className="space-y-3 mb-8">
        <SectionTitle title="FAQ" />
        <SectionHeader heading="Frequently Asked Queastions" />
      </div>
      <Accordion items={items} />
    </div>
  );
};

export default FAQ;
