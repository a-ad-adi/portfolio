import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import "./Photography.scss";

const images = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

export default function Photography({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`photography ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faCameraRetro} />
      <div className="container">
        <div>
          <div className="header"> Just something else to share.. </div>
        </div>
        <div className="gallary">
          {images.map((img) => (
            <img className="photo" src={`./${img}.jpg`} alt="img" />
          ))}
        </div>
      </div>
    </section>
  );
}
