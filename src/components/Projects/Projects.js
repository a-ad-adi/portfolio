import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";

export default function Projects({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`projects ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faFileInvoice} />
      <div className="container">
      <div className="header"> Projects </div>
        <div className="info">
          <div className="project">
            <div> Avenue Code </div>
            <div> UI Engineer </div>
            <div> Gap inc. </div>
          </div>
          <div className="project">
            <div> Quinnox </div>
            <div> Software Engineer </div>
            <div> Automation framework developer </div>
          </div>
        </div>
      </div>
    </section>
  );
}
