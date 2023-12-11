import React from "react";

const Map = () => {
  return (
    <div className="py-5 rounded">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15520.909280764257!2d-16.6856525!3d13.4600802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29b01ef35d4ad%3A0x3b8bfaaf7567b1c1!2sZigTech!5e0!3m2!1sen!2sgm!4v1702045188213!5m2!1sen!2sgm"
        height="400"
        className="border-none w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
