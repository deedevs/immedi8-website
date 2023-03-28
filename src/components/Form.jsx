import React, { useState } from "react";
import usa from "../assets/usa.png";

const Form = () => {
  const [form, setForm] = useState("send");

  return (
    <div className=" w-full h-auto bg-gray-100 shadow-xl">
      <div className="w-full lg:flex lg:items-center mb-16 lg:mb-0 h-[80px]">
        <button
          className={`text-2xl font-bold cursor-pointer uppercase h-full w-full  lg:w-1/2 ${
            form == "send" ? "bg-red-600 text-white" : ""
          }`}
          onClick={() => setForm("send")}
        >
          rates & fees
        </button>
        <button
          className={`text-2xl font-bold cursor-pointer uppercase h-full w-full lg:w-1/2  ${
            form == "receive" ? "bg-red-600 text-white" : ""
          }`}
          onClick={() => setForm("receive")}
        >
          Track & Receive
        </button>
      </div>
      <div className="w-full ">
        {form === "send" ? (
          <form action="#">
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                SEND
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Send Amount"
                  className="py-4 px-2 border-b-2 border-gray-400 bg-transparent outline-0 text-2xl w-3/4 placeholder:text-xl lg:placeholder:text-4xl placeholder:text-slate-300"
                />
                <p className="text-xl md:text-2xl pl-2 md:pl-3 translate-y-[10px] md:translate-y-[26px]">
                  USD{" "}
                  <img
                    src={usa}
                    alt="american flag"
                    className="w-8 inline-block"
                  />
                </p>
              </div>
            </div>
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                receiver country
              </label>
              <input
                type="text"
                placeholder="Receiver Country"
                className=" pt-4 px-2 border-b-2 border-gray-400 bg-transparent outline-0 text-2xl w-full placeholder:text-xl lg:placeholder:text-4xl placeholder:text-slate-300"
              />
            </div>
            <div className="w-full flex justify-end pr-4">
              <button className="px-5 py-2 md:px-6 md:py-3 mb-4  lg:px-8 lg:py-4 rounded-full border bg-red-600  text-white font-medium hover:border hover:border-red-600 hover:bg-white hover:text-black">
                Estimate Fees
              </button>
            </div>
          </form>
        ) : (
          <form action="#">
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                Receive
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Send Amount"
                  className="py-4 px-2 border-b-2 border-gray-400 bg-transparent outline-0 text-2xl w-full placeholder:text-xl lg:placeholder:text-4x placeholder:text-slate-300"
                />
              </div>
            </div>
            <div className="py-8 px-5">
              <label htmlFor="sendAmount" className="uppercase text-sm mt-2">
                receiver country
              </label>
              <input
                type="text"
                placeholder="Receiver Country"
                className=" py-4 px-2 border-b-2 border-gray-400 bg-transparent outline-0 text-2xl w-full placeholder:text-xl lg:placeholder:text-4x placeholder:text-slate-300"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
