import React from "react";

const Map = () => {
  return (
    <div className="py-5 rounded">
      <iframe
        src="https://www.google.com/maps/place/ZigTech/@13.4600802,-16.6856525,15z/data=!4m2!3m1!1s0x0:0x3b8bfaaf7567b1c1?sa=X&ved=2ahUKEwip2sjA3_-CAxUgTKQEHTVvCTEQ_BJ6BAg4EAA"
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
