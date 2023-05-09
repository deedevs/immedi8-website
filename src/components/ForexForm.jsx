import React, { useState } from "react";

const ForexForm = () => {
  const [amountSend, setAmountSend] = useState("");
  const [senderCountry, setSenderCountry] = useState("United Kingdom");
  const [amountRecieve, setAmountRecieve] = useState("");
  const [receiverCountry, setReceiverCountry] = useState("The Gambia");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-auto bg-gray-100 shadow-xl p-3 rounded">
      <form action="#" className="w-full" onSubmit={handleSubmit}>
        <div className="w-full py-2">
          <label htmlFor="send" className="inline-block mb-2">
            You are sending
          </label>
          <div className="flex items-center w-full">
            <input
              value={amountSend}
              type="number"
              name="send"
              id="send"
              placeholder="Enter amount here"
              className="w-1/2 py-3 px-2 border-none outline-none"
              onChange={(e) => setAmountSend(e.target.value)}
            />
            <select
              value={senderCountry}
              name="senderCountry"
              id="senderCountry"
              className="w-1/2 py-3 px-2 border-none outline-none"
              onChange={(e) => setSenderCountry(e.target.value)}
            >
              <option value="United Kingdom">United Kingdom - GBP</option>
              <option value="United States">United States - USD</option>
              <option value="The Gambia">The Gambia - GMD</option>
            </select>
          </div>
        </div>
        <div className="w-full py-2">
          <label htmlFor="receive" className="inline-block mb-2">
            You are receiving
          </label>
          <div className="flex items-center w-full">
            <input
              value={amountRecieve}
              type="number"
              name="receive"
              id="receive"
              placeholder="Amount to recieve"
              className="w-1/2 py-3 px-2 border-none outline-none"
              onChange={(e) => setAmountRecieve(e.target.value)}
            />
            <select
              value={receiverCountry}
              name="receiverCountry"
              id="receiverCountry"
              className="w-1/2 py-3 px-2 border-none outline-none"
              onChange={(e) => setReceiverCountry(e.target.value)}
            >
              <option value="The Gambia">The Gambia - GMD</option>
              <option value="United Kingdom">United Kingdom - GBP</option>
              <option value="United States">United States - USD</option>
            </select>
          </div>
        </div>
        <div className="w-full py-2">
          <p>
            GBP <span>1</span> = GMD <span>72.50</span>
          </p>
        </div>

        {/* <div className="w-full py-2">
          <label htmlFor="deliveryMethod" className="inline-block mb-2">
            Choose Delivery Method
          </label>
          <div className="flex items-center gap-1">
            <button
              type="button"
              value="Cash Pick Up"
              className={`py-2 px-1 text-sm rounded bg-slate-400 text-white border-spacing-2 border-white ${
                active === "Cash Pick Up" ? "bg-red-400" : ""
              }`}
              onClick={handleClick}
            >
              Cash Pick Up
            </button>
            <button
              type="button"
              value="Bank Deposit"
              className={`py-2 px-1 text-sm rounded bg-slate-400 text-white border-spacing-2 border-white ${
                active === "Bank Deposit" ? "bg-red-400" : ""
              }`}
              onClick={handleClick}
            >
              Bank Deposit
            </button>
            <button
              type="button"
              value="Nawec Cash Power"
              className={`py-2 px-1 text-sm rounded bg-slate-400 text-white border-spacing-2 border-white ${
                active === "Nawec Cash Power" ? "bg-red-400" : ""
              }`}
              onClick={handleClick}
            >
              Nawec Cash Power
            </button>
            <button
              type="button"
              value="Mobile Credit"
              className={`py-2 px-1 text-sm rounded bg-slate-400 text-white border-spacing-2 border-white ${
                active === "Mobile Credit" ? "bg-red-400" : ""
              }`}
              onClick={handleClick}
            >
              Mobile Credit
            </button>
          </div>
        </div> */}
        <div className="my-2">
          <p>
            Delivery Time = <span>Instant</span>, Delivery Fee = GBP{" "}
            <span>0.00</span>
          </p>
        </div>
        <p>
          *Amounts are indicative, please register or log in for current iMoney
          Customer Rates
        </p>
        <div>
          <button
            type="submit"
            className="w-full py-2 text-center bg-red-600 text-white text-lg font-semibold tracking-wide border-none outline-none rounded my-3"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForexForm;
