import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "./Logo.css";

export default function Projects({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`logo ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faAd} />
      <div className="container">
        <div className="header">Aditya Tilyalkar</div>
        <div className="info">adityatilyalkar16@gmail.com
        <div className="contact">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        </div>
      </div>
    </section>
  );
}
