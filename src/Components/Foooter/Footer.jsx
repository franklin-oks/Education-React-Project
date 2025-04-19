import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Rhema Academy. All rights reserved
      </p>
      <ul>
        <li>Terms of Servicess</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
