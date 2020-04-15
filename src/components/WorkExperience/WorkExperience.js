import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./WorkExperience.css";

export default function WorkExperience({
  className,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <section
      className={`work-experience ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faBriefcase} />
      <div className="container">
        <div className="header"> Work Experience </div>
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
