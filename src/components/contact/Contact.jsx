import React from "react";
import SectionHeader from "../SectionHeader";
import SectionParagraph from "../SectionParagraph";
import SectionTitle from "../SectionTitle";
import SocialLink from "../SocialLink";
import Number from "./Number";
import ContactForm from "./ContactForm";
import Map from "../Map";

import uk from "../../assets/uk.png";
import usa from "../../assets/usa.png";
import sweden from "../../assets/sweden.png";
import gambia from "../../assets/gambia.png";

import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
// import whatsapp from "../assets/whatsapp.png";
// import youtube from "../assets/youtube.png";
import mail from "../../assets/mail.jpg";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="text-white bg-[#080145] xl:px-52 md:px-14 px-5 pt-14 pb-24"
    >
      <SectionTitle title="Contact Us" className="text-center" />
      <div className="md:flex w-full justify-between items-center space-y-10 md:space-y-0">
        <div className="space-y-8 w-full md:space-y-0 md:w-1/2 text-center">
          <SectionHeader heading="" className="text-sm" />
          <h4 className="capitalize text-2xl md:text-3xl pb-8 text-red-600 font-bold">
            Enquiries / Contact
          </h4>

          <div className="w-full pr-0">
            <ContactForm />
          </div>
        </div>
        <div className="md:w-[50%] pb-6 text-center md:text-start md:ml-14 md:mt-8 lg:mt-10 xxl:mt-14">
          <SectionHeader heading="want to get in touch" className="font-bold" />
          <SectionParagraph content="Feel free to contact us through the following below. We will be glad to reply you." />
          <div className="mt-14 space-y-4 text-white">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Telephones
            </h3>
            <div className="w-full text-center md:text-left">
              <Number icon={gambia} content="+220 7999937" />
              <Number icon={gambia} content="+220 3795999" />
              <Number icon={gambia} content="+220 9595999" />
              <Number icon={gambia} content="+220 437 9917" />
            </div>
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Email
            </h3>
            <p className="text-center md:text-clip">
              <Number icon={mail} content=" Transfer@immedi8money.com" />
            </p>
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Social Links
            </h3>
            <div className="flex justify-between items-center w-2/3 md:w-full xl:w-2/3 mx-auto md:mx-0 ">
              <SocialLink
                img={facebook}
                url="https://www.facebook.com/immedi8finance"
              />
              <SocialLink
                img={linkedin}
                url="https://www.linkedin.com/company/immedi8-services/mycompany/?viewAsMember=true"
              />
              <SocialLink
                img={instagram}
                url="https://www.instagram.com/immedi8/"
              />
              <SocialLink
                img={twitter}
                url="https://twitter.com/immedi8money"
              />
              {/* <SocialLink img={whatsapp} url={} /> */}
              {/* <SocialLink img={youtube}url={} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Map /> */}
    </div>
  );
};

export default Contact;
