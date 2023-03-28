import React from "react";

const Map = () => {
  return (
    <div className="py-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.8273760587006!2d0.04901304611750719!3d51.53789192181923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64a59cdb523%3A0x2aca9b92a3349cfe!2s2%20Heigham%20Rd!5e0!3m2!1sen!2sgm!4v1679914959668!5m2!1sen!2sgm"
        height="600"
        className="border-none w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
