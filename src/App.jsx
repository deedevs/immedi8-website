import React, { useEffect } from "react";
// import Header from "./components/Header";
import { RatesProvider } from "./ratesContext/RatesProvider";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Products from "./components/Products";
import Contact from "./components/contact/Contact";
import Regulators from "./components/Regulators";
import Testimonial from "./components/testimonial/Testimonial";
import FAQ from "./components/FAQ";

import AOS from "aos";
import "aos/dist/aos.css";

import ReactGA from "react-ga";

import NavBar from "./components/NavBar";
import Marquee from "react-fast-marquee";
import Transfer from "./components/transfer/Transfer";
import Procedures from "./components/Procedures";
import WhyUs from "./components/WhyUs";
import { Download } from "./components/Download";

const TRACKING_ID = "UA-261835404-1";

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
      easing: "ease-in-out",
      delay: 100,
      startEvent: "scroll",
      disable: "mobile",
    });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <RatesProvider>
      <div className="w-full overflow-x-hidden font-poppins">
        {/* <NavBar /> */}
        {/* <Marquee /> */}
        <Header />
        <Transfer />
        <About />
        {/* <Products /> */}
        <Services />
        <Procedures />
        <WhyUs />
        <Contact />
        {/* <Download /> */}
        <Regulators />
        <FAQ />
        <Testimonial />
      </div>
    </RatesProvider>
  );
}

export default App;
