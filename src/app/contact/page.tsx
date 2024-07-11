"use client";
import { FaEnvelope } from "react-icons/fa";

import React, { FormEvent, RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { sendEmailAction } from "@/actions/emailActions";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current == null) return;
    setPending(true);
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setPending(false);
          setSuccess(true);
          if (form.current) {
            form.current.reset();
          }
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        (error) => {
          setPending(false);
          setError(error.text ? error.text : "Something went wrong");
          setTimeout(() => {
            setError("");
          }, 2000);
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div>
      <h2 className="flex gap-1 items-center text-3xl text-cyan-500">
        Contact me
        <FaEnvelope />
      </h2>

      <form
        className="text-black flex flex-col w-[100%] max-w-[600px] m-auto"
        ref={form}
        onSubmit={handleSubmit}
      >
        <label className="text-cyan-500 font-light">Name</label>
        <input
          required
          placeholder="Enter Your Name"
          className="text-gray-600 px-3 py-2 rounded-md mb-3 outline-none"
          type="text"
          name="sender_name"
        />
        <label className="text-cyan-500 font-light">Email</label>
        <input
          required
          placeholder="Enter Your Email - i will reply to this address"
          className="text-gray-600 px-3 py-2 outline-none rounded-md mb-3"
          type="email"
          name="reply_to"
        />
        <label className="text-cyan-500 font-light">Message</label>
        <textarea
          required
          placeholder="How can i help you?"
          rows={3}
          className="text-gray-600 outline-none px-3 py-2 rounded-md mb-1 resize-none"
          name="message"
        />
        <div className="text-center text-red-600">{error}</div>
        <div className="text-left">
          <button
            className="hover:bg-cyan-500 border border-cyan-500 transition-all ease-linear px-8 py-2 text-white font-semibold  rounded-md cursor-pointer mt-3"
            type="submit"
            value="Send"
          >
            {pending ? "Sending..." : "Send Message"}
            <div
              className={`animate-spin h-[15px] w-[15px] border-2 border-t-cyan-500 rounded-full bg-transparent inline-block ${
                pending ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </button>
        </div>
        <div
          className={`${
            success ? "opacity-100" : "opacity-0"
          } text-green-500 font-semibold transition-all ease-linear`}
        >
          Email sent Successfully <br />I will contact you soon
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
