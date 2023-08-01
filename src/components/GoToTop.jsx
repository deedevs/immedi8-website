import React, { useEffect, useState } from "react";
import SocialLink from "./SocialLink";
import whatsapp from "../assets/whatsapp.png";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = "+447940163825";

  const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, "");

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-10 right-4">
      <div className="w-[40px] md:w-[60px] mb-8">
        <a href={`https://wa.me/${formattedPhoneNumber}`} target="_blank">
          <img src={whatsapp} alt="social link" className="" />
        </a>
      </div>
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-red-600 border-2 border-white flex items-center justify-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 z-50
        `}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default GoToTop;
