import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import "./Photography.scss";

export default function Photography({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`photography ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faCameraRetro} />
      <div className="container">
        <div className="header">Photography</div>
        <div className="info">Information</div>
      </div>
    </section>
  );
}
