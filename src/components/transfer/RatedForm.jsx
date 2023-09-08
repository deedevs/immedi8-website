import React, { useContext, useState } from "react";
import { RatesContext } from "../../ratesContext/RatesProvider";

const RatesForm = () => {
  const [senderCurrency, setSenderCurrency] = useState("");
  const [receiverCurrency, setReceiverCurrency] = useState("GMD");
  // const [deliveryMethod, setDeliveryMethod] = useState("");

  const [amountToSend, setAmountToSend] = useState("");
  const [amountToRecieve, setAmountToRecieve] = useState("");

  const [fee, setFee] = useState();
  const [rate, setRate] = useState();

  const data = useContext(RatesContext);

  // console.log(data && data);

  const calculateValue = () => {
    let serviceFee;
    let exchangeRate;
    if (data) {
      data?.data.fees.forEach((fee) => {
        if (
          fee.from_currency === senderCurrency &&
          fee.to_currency === receiverCurrency
        ) {
          fee.fee_ranges.forEach((range) => {
            if (amountToSend <= range.range_to) {
              serviceFee = range.range_charges;
              setFee(serviceFee);
            }
          });
        }
      });

      data.data.rates.forEach((rate) => {
        if (
          rate.from_currency === senderCurrency &&
          rate.to_currency === receiverCurrency
        ) {
          exchangeRate = rate.to_currency_rate;
          setRate(exchangeRate);
        }
      });
    }
    if (serviceFee && exchangeRate) {
      let result = (
        (amountToSend - serviceFee) *
        exchangeRate
      ).toLocaleString();
      result && setAmountToRecieve(result);
    }
  };

  const handleDeliveryMethodChange = (e) => setDeliveryMethod(e.target.value);
  const handleSenderCurrencyChange = (e) => setSenderCurrency(e.target.value);

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setAmountToSend(inputAmount);

    // if (!isNaN(inputAmount.trim())) {
    //   const calculatedResult = parseFloat(inputAmount) * 70;
    //   setAmountToRecieve(calculatedResult.toFixed(2));
    // } else {
    //   setAmountToRecieve("");
    //   setAmountToSend("");
    // }
  };

  const handleReset = () => {
    setAmountToRecieve("");
    setAmountToSend("");
    setSenderCurrency("");
    setFee("");
    setRate("");
  };

  return (
    <div className="max-w-[800px] w-full bg-white shadow-md rounded-3xl border-lime-100 p-10">
      <h3 className="text-[#080145] font-bold text-3xl pb-6 text-center">
        Check Our Rates And Fees
      </h3>
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
                  value={senderCurrency}
                  id=""
                  className="w-full leading-3 p-2.5 outline-none text-black"
                  onChange={handleSenderCurrencyChange}
                >
                  <option disabled hidden selected></option>
                  <option value="GBP">United Kingdom - GBP</option>
                  <option value="MAD">Morocco - MAD</option>
                  <option value="USD">United States - USD</option>
                  <option value="EUR">European Union - EUR</option>
                  <option value="SEK">Sweden - SEK</option>
                  <option value="DKK">Denmark - DKK</option>
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
          {amountToRecieve && (
            <div className="lg:flex justify-between py-3">
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
              {/* <div className="w-full flex justify-between"> */}

              <div>
                <div>
                  <h3 className="">Rate and Fee</h3>

                  <li>
                    Rate:
                    <span className="text-red-600">
                      {" "}
                      1{" " + senderCurrency + " "} = {rate} GMD
                    </span>
                  </li>

                  <li>
                    Fee:
                    <span className="text-red-600">
                      {" "}
                      {fee + " "}
                      {senderCurrency}
                    </span>
                  </li>
                </div>
              </div>
              <div>
                <button
                  className="py-1 px-3 bg-[#b90000] rounded text-slate-50 hover:bg-[#6e1b1b]"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
          <div className="w-full pt-5">
            <button
              type="button"
              className="w-full bg-green-900 hover:bg-green-950 text-white rounded-md border-none outline-none py-2 font-semibold tracking-wider"
              onClick={calculateValue}
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatesForm;
