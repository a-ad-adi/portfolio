import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./WorkExperience.scss";

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
        <div>
          <div className="header"> Work Experience </div>
        </div>
        <div className="info">
          <div className="company">
            <div>
              <div className="name">Avenue Code</div>
            </div>
            <div className="location">
              San Francisco, US | UI Engineer (07/2019 – present)
            </div>
            <div className="desc">
              <ul>
                <li>
                  developing front end for Gap Inc’s internal website to manage
                  millions of promotions, awards, coupon codes etc. which can be
                  redeemed by customers on online website as well as stores or
                  automatically applied to the shopping carts.
                </li>
                <li>
                  features include advanced searching from millions of records,
                  filtering and sorting capabilities to narrow down the search,
                  create flow to add new promotions, two-step approve procedure,
                  export search results to files
                </li>
              </ul>
            </div>
          </div>
          <div className="company">
            <div>
              <div className="name">Research Foundation IEEC</div>
            </div>
            <div className="location">
              New York, US | Web Developer Intern(05/2018 – 05/2019)
            </div>
            <div className="desc">
              <ul>
                <li>
                  designed wireframes using Adobe XD CC and webpages using
                  OmniUpdate
                </li>
                <li>
                  worked with the professors and communications dept to update
                  the content on the website
                </li>
              </ul>
            </div>
          </div>
          <div className="company">
            <div>
              <div className="name">EnhanceVR</div>
            </div>
            <div className="location">
              New York, US | Volunteer work as a Frontend developer (01/2018 –
              04/2018)
            </div>
            <div className="desc">
              <ul>
                <li>
                  designed website wireframes and webpages for the company’s
                  official website
                </li>
              </ul>
            </div>
          </div>

          <div className="company">
            <div>
              <span className="name">Quinnox</span>
            </div>
            <div className="location">
              Pune, India | Software developer (08/2014 – 05/2017)
            </div>
            <div className="desc">
              <ul>
                <li>
                  developed an end to end, component driven, web-based solution
                  to web and mobile automation frameworks for generation,
                  management and distributed execution/batch runs of test suites
                </li>
                <li>
                  developed time efficient (40% over the previous framework used
                  in the organization), highly scalable, reusable and easy to
                  use keyword-based automation frameworks in java one using
                  selenium and other using Sikuli (an unorthodox and innovative
                  way of image-based automation)
                </li>
                <li>
                  lead a team of 2 people to add new features to the automation
                  framework
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
