import React, { useContext } from "react";
import { RatesContext } from "../ratesContext/RatesProvider";
import Marquee from "react-fast-marquee";

const Ratesmarquee = () => {
  const data = useContext(RatesContext);
  console.log(data);
  return (
    <Marquee
      className="h-14 bg-transparent text-white font-extrabold text-xl pt-8 md:pt-0 hidden xl:visible"
      autoFill={true}
      pauseOnHover={true}
    >
      <div className="flex gap-8 mr-8 items-center">
        {/* <h2 className="text-white">Rates:</h2>
        <br /> */}
        {/* <div className=""> */}
        <p>
          Pounds: <span>£75.95</span>
        </p>
        <p>
          Dollar: <span>$59.21</span>
        </p>
        <p>
          DKK: <span>8.71</span>
        </p>
        <p>
          EURO: <span>64.96</span>
        </p>
        {/* </div> */}
      </div>
    </Marquee>
  );
};

export default Ratesmarquee;
