import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJava,
  faJs,
  faNodeJs,
  faAdobe,
  faSass,
  faHtml5,
  faCss3,
  faAngular,
  faAws,
  faBootstrap,
  faNpm,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

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
        <div>
          <div className="header"> Technology Stack </div>
        </div>
        <div className="logos">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faJava} />
          <FontAwesomeIcon icon={faAngular} />
          <FontAwesomeIcon icon={faAdobe} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faAws} />
          <FontAwesomeIcon icon={faNpm} />
          <FontAwesomeIcon icon={faBootstrap} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faPython} />
        </div>
        <div className="info">
          <ul>
            <li>
              <div className="name">Web technologies:</div>
              <div>
                HTML5, CSS3, ReactJs, Redux, Angular 4, jQuery, NodeJS,
                ExpressJs, Spring boot, Bootstrap, SASS, XML, MustacheJs, AgGrid
              </div>
            </li>
            <li>
              <div className="name">Programming languages:</div>

              <div>Java, JavaScript, ruby, python, C, C++, VBScript</div>
            </li>
            <li>
              <div className="name">Database:</div>
              <div>MySQL, MongoDB</div>
            </li>
            <li>
              <div className="name">Other:</div>
              <div>
                GitHub, Apache Maven, Apache ANT, Adobe photoshop, Adobe XD CC
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
