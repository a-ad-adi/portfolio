import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

import "./Projects.scss";

export default function Projects({ className, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className={`projects ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon className="placeholder" icon={faFileInvoice} />
      <div className="container">
        <div>
          <div className="header"> Projects </div>
        </div>

        <div className="info">
          <div className="freelance">
            <div className="project">
              <div>
                <div className="name"> Quiz App </div>
              </div>
              <ul>
                <li>
                  developing a web-based quiz application using ReactJs on the
                  frontend and NodeJS in the backend
                </li>
                <li>
                  with this website professors can add topics, subtopics and
                  questions along with attachments like image files and tables,
                  select difficulty levels, explanation etc. while student can
                  select topics, subtopics and number of questions to start with
                  a quiz
                </li>
                <li>
                  he website also has features to auto-submitting the quiz,
                  displaying quiz summary, random selection of questions for the
                  quiz, keep track of the progress of the student
                </li>
                <li>
                  upcoming features include notifications, feedback for question
                  and graphs to display progress
                </li>
              </ul>
            </div>
          </div>
          <div className="acadamic">
            <div className="project">
              <div>
                <div className="name"> Algo simulator </div>
              </div>

              <ul>
                <li>
                  simulated the working of merge sort and shortest path
                  algorithm for using simple animation
                </li>
                <li>
                  developed a webapp using ReactJs and GSAP with features to
                  play-pause-reverse-stop the simulation
                </li>
              </ul>
            </div>

            <div className="project">
              <div>
                <div className="name">
                  {" "}
                  Remote document collection and retrieval system{" "}
                </div>
              </div>

              <ul>
                <li>
                  designed a website for storing and retrieving documents using
                  NodeJS framework
                </li>
                <li>
                  used ReactJS for the front end, MongoDB to store the
                  documents, and ExpressJS to create web service
                </li>
              </ul>
            </div>
            <div className="project">
              <div>
                <div className="name"> Time series analysis </div>
              </div>

              <ul>
                <li>
                  analyzed sale of product distribution of 1000 different
                  products over the period of 3 months
                </li>
                <li>
                  performed prediction of sale of 100 key products for next 28
                  days using ARIMA/SARIMA models based on AIC
                </li>
              </ul>
            </div>
            <div className="project">
              <div>
                <div className="name"> Shell for XV6 Operating System </div>
              </div>

              <ul>
                <li>implemented a simple shell for XV6 using C</li>
              </ul>
            </div>
            <div className="project">
              <div>
                <div className="name"> Pipelined processor Simulator </div>
              </div>

              <ul>
                <li>designed a pipelined processor simulator using java</li>
                <li>
                  implemented issue queue, load-store queue, reorder buffer,
                  data forwarding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
