import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "./Education.css";

export default function Education({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`education ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeav={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faGraduationCap} />
      <div className="container">
        <div className="header"> Education </div>
        <div className="info">
          <div className="college">
            <div> State University of New York </div>
            <div> Master of Science </div>
            <div> 3.8 </div>
          </div>
          <div className="college">
            <div> Uiversity of Pune </div>
            <div> Bachelor of Engineering </div>
            <div> 3.5 </div>
          </div>
        </div>
      </div>
    </section>
  );
}
