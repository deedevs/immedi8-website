import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input";
import InputLabel from "../InputLabel";

function ContactForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          "service_3tfkaac",
          "template_q567tib",
          form.current,
          "mknT0HQOxDZMZe2-e"
        )
        .then(
          (result) => {
            setMessage("Thank you for your message!");
            setName("");
            setPhone("");
            setEmail("");
            setComment("");
            if (result) {
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  setTimeout(() => {
    setMessage("");
  }, 5000);

  function validate() {
    const errors = {};
    if (!name.trim()) {
      console.log(name);
      errors.name = "Required";
    } else if (/\d/.test(name)) {
      errors.name = "Name cannot contain a number";
    }

    if (!phone.trim()) {
      errors.phone = "Required";
    } else if (phone.length < 7) {
      errors.phone = "Must be greater or equal to 7 digits.";
    }

    if (!email.trim()) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!comment.trim()) {
      errors.comment = "Required";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-full bg-white space-y-5 shadow-xl shadow-slate-900 rounded p-6"
    >
      <div
        className={`bg-green-400 text-[#1c2e4a] w-full py-3 ${
          message ? "block" : "hidden"
        }`}
      >
        {message}
      </div>
      <div>
        <InputLabel labelFor="name" name="name" />
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setErrors({ ...errors, name: "" })}
        />
        {errors.name && (
          <span className="block w-full text-left text-red-600">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <InputLabel labelFor="phone" name="telephone number" />
        <Input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => setErrors({ ...errors, phone: "" })}
        />
        {errors.phone && (
          <span className="block w-full text-left text-red-600">
            {errors.phone}
          </span>
        )}
      </div>

      <div>
        <InputLabel labelFor="email" name="email" />
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setErrors({ ...errors, email: "" })}
        />
        {errors.email && (
          <span className="block w-full text-left text-red-600">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <InputLabel labelFor="comment" name="Comment or Message" />
        <textarea
          id="comment"
          className="w-full border border-gray-300 rounded text-base p-5 text-[#1c2e4a] outline-none"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onFocus={() => setErrors({ ...errors, comment: "" })}
        ></textarea>
        {errors.comment && (
          <span className="block w-full text-left text-red-600">
            {errors.comment}
          </span>
        )}
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
