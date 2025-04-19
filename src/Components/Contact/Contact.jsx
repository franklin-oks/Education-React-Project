import "./Contact.css";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
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
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Your Name" required />

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

          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>Message sending...</span>
      </div>
    </div>
  );
};

export default Contact;
