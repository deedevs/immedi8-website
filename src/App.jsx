import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Payments from "./components/Payments";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <About />
      <Products />
      <Services />
      <Payments />
      <Contact />
    </div>
  );
}

export default App;
