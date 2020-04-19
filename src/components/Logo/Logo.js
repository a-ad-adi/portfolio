import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Logo.scss";

export default function Projects({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`logo ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faAd} />
      <div className="container">
        <div className="profile-photo">
          <img src="./profile.jpeg" />
        </div>
        <div className="header">Aditya Tilyalkar</div>
        <div className="info">adityatilyalkar16@gmail.com</div>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/adityat16/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/a-ad-adi">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/adityatilyalkar">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/aditya.tilyalkar">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </section>
  );
}
