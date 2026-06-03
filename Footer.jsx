import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about-section">
          <h2>About</h2>

          <p className="about-text">
            This is a Capstone react based project written, built and
            compiled by Group 27 (TSA-Juniorfrontdevs).
          </p>

          <ul className="members-list">
            <li>Timileyin</li>
            <li>Emmanuel</li>
            <li>Nwosu</li>
            <li>Valentine</li>
            <li>George</li>
            <li>Joshua</li>
            <li>Temitayo</li>
            <li>Victor</li>
            <li>Afeez</li>
          </ul>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-left">
            <p>
              ©2026 Design by{" "}
              <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer">Amaka</a>
              {" "} & {" "}
              <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">Ifeoma A.</a>
            </p>

            <p>
              Built by{" "}
              <a href="https://github.com/ValentinePraise/TS-Academy-Capstone-Project27" target="_blank" rel="noopener noreferrer">
                TSA-Juniorfrontdevs
              </a>. All rights reserved
            </p>
          </div>

          <div className="footer-right">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
