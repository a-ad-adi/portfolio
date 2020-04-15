import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Photography from "./components/Photography/Photography";
import TechStack from "./components/TechStack/TechStack";

const LOGO = "LOGO";
const EDUCATION = "EDUCATION";
const WORK_EXP = "WORK_EXP";
const TECH_STACK = "TECH_STACK";
const PROJECTS = "PROJECTS";
const PHOTOGRAPHY = "PHOTOGRAPHY";
const row1 = [LOGO, EDUCATION, WORK_EXP];
const row2 = [TECH_STACK, PROJECTS, PHOTOGRAPHY];

function App() {
  const [sectionInFocus, setSectionInFocus] = useState(null);

  const logoClass = sectionInFocus === LOGO ? "focused" : sectionInFocus ? "shaded" : "";
  const educationClass = sectionInFocus === EDUCATION ? "focused" : sectionInFocus ? "shaded" : "";
  const workExpClass = sectionInFocus === WORK_EXP ? "focused" : sectionInFocus ? "shaded" : "";
  const projectsClass = sectionInFocus === PROJECTS ? "focused" : sectionInFocus ? "shaded" : "";
  const techStackClass = sectionInFocus === TECH_STACK ? "focused" : sectionInFocus ? "shaded" : "";
  const photographyClass = sectionInFocus === PHOTOGRAPHY ? "focused" : sectionInFocus ? "shaded" : "";

  const handleMouseEnter = (section) => {
    setSectionInFocus(section);
  };

  const handleMouseLeave = () => {
    setSectionInFocus(null);
  };

  return (
    <div className="app">
      <div className="row">
        <Logo
          className={logoClass}
          onMouseEnter={() => handleMouseEnter(LOGO)}
          onMouseLeave={handleMouseLeave}
        />
        <Education
          className={educationClass}
          onMouseEnter={() => handleMouseEnter(EDUCATION)}
          onMouseLeave={handleMouseLeave}
        />
        <WorkExperience
          className={workExpClass}
          onMouseEnter={() => handleMouseEnter(WORK_EXP)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="row">
        <Projects
          className={projectsClass}
          onMouseEnter={() => handleMouseEnter(PROJECTS)}
          handleMouseLeave={handleMouseLeave}
        />
        <TechStack
          className={techStackClass}
          onMouseEnter={() => handleMouseEnter(TECH_STACK)}
          onMouseLeave={handleMouseLeave}
        />
        <Photography
          className={photographyClass}
          onMouseEnter={() => handleMouseEnter(PHOTOGRAPHY)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default App;
