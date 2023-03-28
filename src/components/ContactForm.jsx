import React, { useState } from "react";
import Input from "./Input";
import InputLabel from "./InputLabel";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-transparent space-y-5 shadow-md rounded p-6"
    >
      <div>
        <InputLabel labelFor="name" name="name" />
        <Input type="text" id="name" state={name} setState={setName} />
      </div>

      <div>
        <InputLabel labelFor="phone" name="telephone number" />
        <Input type="text" id="phone" state={phone} setState={setPhone} />
      </div>

      <div>
        <InputLabel labelFor="email" name="email" />
        <Input type="email" id="email" state={email} setState={setEmail} />
      </div>

      <div>
        <InputLabel labelFor="comment" name="Comment or Message" />
        <textarea
          id="comment"
          className="w-full border border-gray-300 rounded text-base p-5 text-[#1c2e4a] outline-none"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full py-3 text-base uppercase rounded-md bg-red-600  text-white font-medium hover:bg-white hover:border hover:border-red-600 hover:text-black"
        >
          submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
