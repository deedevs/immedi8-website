import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axios-config";

const RatesContext = createContext();

const RatesProvider = ({ children }) => {
  const [rates, setRates] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/exchangeRates/countriesRateAndServiceFees"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData()
      .then((data) => setRates(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <RatesContext.Provider value={rates}>{children}</RatesContext.Provider>
  );
};

export { RatesProvider, RatesContext };
