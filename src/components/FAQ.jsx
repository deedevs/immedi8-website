import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import Accordion from "./Accordion";

const FAQ = () => {
  const items = [
    {
      title: "What is  I-Money app? ",
      content:
        "I-Money app is a smartphone application that allows you to make payments, send and receive money, purchase cash power, mobile top-ups (airtime) and perform other financial transactions using your smartphone phone.",
    },
    {
      title: "How do I download I-Money app?",
      content:
        "You can download I-Money app from your phone's app store, such as Google Play or the Apple App Store. Simply search for the name of the app you want to download and follow the prompts to install it on your phone.",
    },
    {
      title: "Is it safe to use I-Money money app?",
      content:
        "Yes, I-Money app use encryption and other security measures to protect your financial information. However, it's important to be cautious when using any app that involves sensitive information, such as your bank account or credit card details.",
    },
    {
      title: "How do I set up I-Money money account?",
      content:
        "To set up I-Money account, you'll typically need to provide some basic personal information, such as your name, address, and phone number. You also have the option to link a bank account, use your credit/debit card or your e-wallet on your I-Money account.",
    },
    {
      title: "Can I send money to someone who doesn't have a I-Money account?",
      content:
        "I-Money money app allows you to send money to anyone with a phone number, even if they don't have a I-Money account. The recipient will have the option to pick up cash at our agent locations or download the app to get instant access to his/her funds on our e-wallet.",
    },
    {
      title: "What fees are associated with using  I-Money app?",
      content:
        "Fees vary depending on the type of transaction you're making. Some services may charge a flat fee per transaction, while others may charge a percentage of the amount you're sending or receiving.",
    },
    {
      title:
        "What do I do if I have a problem with a I-Money money transaction? ",
      content:
        "If you have a problem with a I-Money transaction, such as an error or unauthorized charge, you should contact the customer support team on the app. I-Money has a dedicated support section within the app and our website where you can report any issues.",
    },
  ];
  return (
    <div
      id="FAQ"
      className="bg-[#080145] text-white xl:px-52 md:px-14 px-5 pt-14 pb-24 text-center clip1"
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
