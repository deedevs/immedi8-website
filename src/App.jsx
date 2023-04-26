import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Regulators from "./components/Regulators";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

import AOS from "aos";
import "aos/dist/aos.css";

import ReactGA from "react-ga";

const TRACKING_ID = "G-JTTSGCCD1B";

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
    ReactGA.event({
      category: "User",
      action: "Created an Account",
    });
  }, []);
  return (
    <div className="w-full overflow-x-hidden font-poppins">
      <Header />
      <About />
      <Products />
      <Services />
      <Regulators />
      <Contact />
      <FAQ />
      <Testimonial />
    </div>
  );
}

export default App;
