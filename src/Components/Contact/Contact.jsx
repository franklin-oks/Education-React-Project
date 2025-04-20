import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
// emailJs
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_r9alg6a", "template_tqa1tic", form.current, {
        publicKey: "q4EfsK0o1PrQ4eUVs",
      })
      .then(
        () => {
          form.current.reset();
          setStatus("Message Sent");

          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.warn("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Send us a Message ✉</h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <MdEmail /> franklinokeke2016@gmail.com
          </li>
          <li>
            <BsFillTelephoneFill />
            +234 8103919717
          </li>
          <li>
            <FaLocationDot />
            15 Olusegun Obasanjo Way, Ikeja,
            <br />
            Lagos, Nigeria.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="number">Phone:</label>
          <input
            type="tel"
            id="name"
            name="number"
            placeholder="Enter Your Number"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            placeholder="Drop a message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn" value="send">
            {status === "Sending..."
              ? "Sending..."
              : status === "Message Sent"
              ? "Message Sent"
              : "Submit Now"}
          </button>
        </form>
        {/* <span>{status}</span> */}
        {status === "error" && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Failed to send. Please try again.
          </span>
        )}
      </div>
    </div>
  );
};

export default Contact;
