import React from "react";
import SectionHeader from "./SectionHeader";
import { SectionParagraph } from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SocialLink from "./SocialLink";
import Number from "./Number";
import uk from "../assets/uk.png";
import usa from "../assets/usa.png";
import sweden from "../assets/sweden.png";
import gambia from "../assets/gambia.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import mail from "../assets/mail.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-[#1c2e4a] text-white lg:px-52 md:px-14 px-5 pt-14 pb-24">
      <SectionTitle title="Contact Us" className="text-center" />
      <div className="md:flex w-full justify-between items-center">
        <div className="md:w-[50%] pb-6 text-center md:text-start md:mr-14 md:mt-8 lg:mt-10 xxl:mt-14">
          <SectionHeader heading="want to get in touch" />
          <SectionParagraph content="Feel free to contact us through the following below. We will be glad to reply you." />
          <div className="mt-14 space-y-4">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider">
              Telephones
            </h3>
            <Number icon={uk} content=" +44 (0) 800 0324 314" />
            <Number icon={sweden} content="+46 8 40839042" />
            <Number icon={usa} content="+1 646 661 2911 " />
            <Number icon={gambia} content="+220 437 9917" />
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider">
              Email
            </h3>
            <Number icon={mail} content=" Transfer@immedi8money.com" />
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider">
              Social Links
            </h3>
            <div className="flex justify-between items-center w-2/3 md:w-full xl:w-2/3 mx-auto md:mx-0 ">
              <SocialLink img={facebook} />
              <SocialLink img={linkedin} />
              <SocialLink img={instagram} />
              <SocialLink img={twitter} />
              <SocialLink img={whatsapp} />
              <SocialLink img={youtube} />
            </div>
          </div>
        </div>
        <div className="space-y-8 w-full md:space-y-0 md:w-1/2 text-center">
          <SectionHeader heading="" className="text-sm" />
          <h4 className="capitalize text-2xl md:text-3xl text-red-600 ">
            Enquiries / Contact
          </h4>

          <div className="w-full p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
