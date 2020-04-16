import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "./Education.scss";

export default function Education({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`education ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeav={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faGraduationCap} />
      <div className="container">
        <div>
          <div className="header"> Education </div>{" "}
        </div>

        <div className="info">
          <div className="college">
            <div>
              <div className="name">
                State University of New York at Binghamton
              </div>
            </div>

            <div className="desc">
              <div> Master of Science in Computer Science</div>
              <div> 8/2017 - 5/2019 </div>
              <div> GPA: 3.8 </div>
            </div>
          </div>

          <div className="college">
            <div>
              <div className="name"> University of Pune </div>
            </div>
            <div className="desc">
              <div> Bachelor of Engineering in Computer Science</div>
              <div> 8/2010 - 5/2014 </div>
              <div> GPA: 3.5 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
