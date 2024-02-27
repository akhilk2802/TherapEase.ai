import React from "react";
import "../styles/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} TherapEase.ai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
