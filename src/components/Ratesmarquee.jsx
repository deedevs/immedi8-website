import React, { useContext } from "react";
import { RatesContext } from "../ratesContext/RatesProvider";
import Marquee from "react-fast-marquee";

const Ratesmarquee = () => {
  const data = useContext(RatesContext);

  return (
    <Marquee
      className="h-14 bg-transparent text-white font-extrabold text-xl pt-8 md:pt-0 hidden xl:visible"
      autoFill={true}
      pauseOnHover={true}
    >
      <div className="flex gap-8 mr-8 items-center">
        {/* <h2 className="text-white">Rates:</h2>
        <br /> */}
        {data?.data?.rates.map((rate, index) =>
          rate.country_from !== "Gambia The" &&
          rate.country_to === "Gambia The" ? (
            <span key={index}>
              {rate.from_currency + ": " + rate.to_currency_rate}
            </span>
          ) : (
            ""
          )
        )}
      </div>
    </Marquee>
  );
};

export default Ratesmarquee;
