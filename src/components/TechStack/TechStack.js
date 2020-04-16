import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "./TechStack.scss";

export default function TechStack({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`technology-stack ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faCode} />
      <div className="container">
        <div className="header"> Technology Stack</div>
        <div className="info">
          <div className="company">
            <div> Avenue Code </div>
            <div> UI Engineer </div>
            <div> Gap inc. </div>
          </div>
          <div className="company">
            <div> Quinnox </div>
            <div> Software Engineer </div>
            <div> Automation framework developer </div>
          </div>
        </div>
      </div>
    </section>
  );
}
