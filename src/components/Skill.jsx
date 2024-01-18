import React, { useEffect } from "react";
import "../Css/skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <PageWrapper title="Skills" description="skill I have">
      <div
        className="project"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        <h1>My Knowledge in Languages</h1>
      </div>
      <div className="skills">
        <div class="skill-bars">
          <h3>Frontend languages</h3>
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line js">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>ReactJs</span>
            </div>
            <div class="progress-line react">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>NextJs</span>
            </div>
            <div class="progress-line next">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Redux</span>
            </div>
            <div class="progress-line redux">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>jQuery</span>
            </div>
            <div class="progress-line jquery">
              <span></span>
            </div>
          </div>
        </div>

        <div class="skill-bars" style={{ height: "30%" }}>
          <h3>Backend languages</h3>
          <div class="bar">
            <div class="info">
              <span>NodeJs</span>
            </div>
            <div class="progress-line node">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>ExpressJs</span>
            </div>
            <div class="progress-line express">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>MongoDB</span>
            </div>
            <div class="progress-line mongo">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>GraphQL</span>
            </div>
            <div class="progress-line graph">
              <span></span>
            </div>
          </div>
        </div>

        <div class="skill-bars" style={{ height: "30%" }}>
          <h3>Programming</h3>
          <div class="bar">
            <div class="info">
              <span>C++</span>
            </div>
            <div class="progress-line c">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Python</span>
            </div>
            <div class="progress-line python">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Object Oriented Programming</span>
            </div>
            <div class="progress-line oop">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Skill;
