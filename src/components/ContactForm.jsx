import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-transparent space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 font-medium uppercase w-full text-left cursor-pointer"
        >
          Name
        </label>
        <input
          type="text"
          className="w-full border-1 border-gray-300 rounded p-3 text-base text-[#1c2e4a]"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 font-medium uppercase w-full text-left cursor-pointer"
        >
          Telephone Number:
        </label>
        <input
          type="tel"
          className="w-full border-1 border-gray-300 rounded p-3 text-base text-[#1c2e4a]"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 font-medium uppercase w-full text-left cursor-pointer"
        >
          Email:
        </label>
        <input
          type="email"
          className="w-full border-1 border-gray-300 rounded text-base p-3 text-[#1c2e4a]"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="comment"
          className="block mb-2 font-medium uppercase w-full text-left cursor-pointer"
        >
          Comment
        </label>
        <textarea
          id="comment"
          className="w-full border-1 border-gray-300 rounded text-base p-5 text-[#1c2e4a]"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full py-3 text-base uppercase rounded-md bg-red-600  text-white font-medium hover:bg-white hover:text-black"
        >
          submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
