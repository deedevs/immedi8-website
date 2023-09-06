import React, { useContext, useState } from "react";
import { RatesContext } from "../../ratesContext/RatesProvider";

const RatesForm = () => {
  const [senderCurrency, setSenderCurrency] = useState("");
  //   const [receiverCurrency, setReceiverCurrency] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const [amountToSend, setAmountToSend] = useState("");
  const [amountToRecieve, setAmountToRecieve] = useState("");

  const { data } = useContext(RatesContext);
  data.fees.forEach(() => {});

  const handleDeliveryMethodChange = (e) => setDeliveryMethod(e.target.value);
  const handleSenderCurrencyChange = (e) => setSenderCurrency(e.target.value);

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setAmountToSend(inputAmount);

    if (!isNaN(inputAmount.trim())) {
      const calculatedResult = parseFloat(inputAmount) * 70;
      setAmountToRecieve(calculatedResult.toFixed(2));
    } else {
      setAmountToRecieve("");
      setAmountToSend("");
    }
  };

  return (
    <div className="max-w-[700px] w-full bg-white shadow-md rounded-3xl border-lime-100 p-6">
      {/* <h3 className="text-[#121e31]  text-xl text-center">Make a Transfer</h3> */}
      <div className="w-full h-auto">
        <form action="#" className="space-y-2 text-[#121e31]">
          <div>
            <label htmlFor="">You are sending</label>
            <div className="flex items-center">
              <input
                type="text"
                value={amountToSend}
                className="w-1/2 leading-3 p-2.5 outline-none text-black border border-gray-900"
                onChange={handleAmountChange}
                required
              />
              <div className="w-1/2">
                <select
                  name="senderCountry"
                  id=""
                  className="w-full leading-3 p-2.5 outline-none text-black"
                  onChange={handleSenderCurrencyChange}
                >
                  <option value="GBP">United Kingdom - GBP</option>
                  <option value="USD">United States - USD</option>
                  <option value="EUR">European Union - EUR</option>
                  <option value="SEK">Sweden - SEK</option>
                  <option value="DKK">Denmark - DKK</option>
                  <option value="GBP">United Kingdom - GBP</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">They will receive</label>
            <div className="flex items-center">
              <input
                type="text"
                value={amountToRecieve}
                className="w-1/2 leading-3 p-2.5 outline-none text-black border border-gray-900"
                readOnly
              />
              <div className="w-1/2">
                <select
                  name="senderCountry"
                  id=""
                  className="w-full leading-3 p-2.5 outline-none text-black"
                >
                  <option value="GMD">The Gambia - GMD</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div>
          </div> */}

          <div className="lg:flex justify-between">
            {/* <div className="lg:flex-1">
              <label htmlFor="">Choose Delivery Method</label>
              <div className="w-full">
                <div className="w-full">
                  <label>
                    <input
                      id="delivery-method-1"
                      value="cash pick up"
                      type="radio"
                      name="immedi8-delivery"
                      className="mr-2"
                      onChange={handleDeliveryMethodChange}
                    />
                    Cash Pick Up
                  </label>
                </div>

                <div className="w-full">
                  <label>
                    <input
                      value="bank deposit"
                      id="delivery-method-2"
                      type="radio"
                      name="immedi8-delivery"
                      className="mr-2"
                      onChange={handleDeliveryMethodChange}
                    />
                    Bank Deposit
                  </label>
                </div>
                <div className="w-full">
                  <label>
                    <input
                      value="mobile wallet"
                      id="delivery-method-3"
                      type="radio"
                      name="immedi8-delivery"
                      className="mr-2"
                      onChange={handleDeliveryMethodChange}
                    />
                    Mobile Wallet
                  </label>
                </div>
              </div>

              {/*<div className="w-full">
                <p>
                  Delivery time =
                  <span>
                    {deliveryMethod == "cash pick up" ||
                    deliveryMethod == "mobile wallet" ? (
                      <span className="text-red-600"> Instant</span>
                    ) : deliveryMethod == "bank deposit" ? (
                      <span className="text-red-600"> Up to 24 hours</span>
                    ) : (
                      <span className="text-red-600"> Instant</span>
                    )}
                  </span>
                </p>
                <div className="my-4">
                  <button className="px-3 py-2 border-none bg-green-900 rounded-md">
                    Calculate
                  </button>
                </div>
                  
              </div>
            </div> */}
            <div className="lg:text-left">
              {amountToRecieve ? (
                <div>
                  <h3 className="text-white">Rate and Fees</h3>

                  <li>
                    <span>Rate: {senderCurrency}</span> <span>1</span> ={" "}
                    <span>GMD</span> <span>75.45</span>
                  </li>

                  <li>
                    <span>Fee: {senderCurrency}</span>
                    <span>GMD</span> <span>75.45</span>
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-[#b90000] text-white rounded-md border-none outline-none py-2 font-semibold tracking-wider"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatesForm;
