import React from "react";
import SectionHeader from "./SectionHeader";
import SectionParagraph from "./SectionParagraph";
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
// import whatsapp from "../assets/whatsapp.png";
// import youtube from "../assets/youtube.png";
import mail from "../assets/mail.jpg";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="text-[#1c2e4a] bg-white xl:px-52 md:px-14 px-5 pt-14 pb-24"
    >
      <SectionTitle title="Contact Us" className="text-center" />
      <div className="lg:flex w-full justify-between items-center">
        <div className="lg:w-[50%] pb-6 text-center md:text-start md:mr-14 md:mt-8 lg:mt-10 xxl:mt-14">
          <SectionHeader heading="want to get in touch" />
          <SectionParagraph content="Feel free to contact us through the following below. We will be glad to reply you." />
          <div className="mt-14 space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Telephones
            </h3>
            <Number icon={uk} content=" +44 (0) 800 0324 314" />
            <Number icon={sweden} content="+46 8 40839042" />
            <Number icon={usa} content="+1 646 661 2911 " />
            <Number icon={gambia} content="+220 437 9917" />
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Email
            </h3>
            <Number icon={mail} content=" Transfer@immedi8money.com" />
          </div>
          <div className="mt-14 space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-center lg:text-left">
              Social Links
            </h3>
            <div className="flex gap-8 max-w-max lg:w-full mx-auto lg:mx-0 ">
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
        <div className="space-y-8 w-full lg:space-y-0 lg:w-1/2 text-center">
          <SectionHeader heading="" className="text-sm" />
          <h4 className="capitalize text-2xl md:text-3xl text-red-600 ">
            Enquiries / Contact
          </h4>

          <div className="w-full lg:p-8 lg:pr-0">
            <ContactForm />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
