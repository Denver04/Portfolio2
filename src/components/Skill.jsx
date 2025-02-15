import React, { useEffect } from "react";
import "../Css/skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <PageWrapper title="Skills" description="skill I have">
      <div className="project">
        <h1>My Skills</h1>
      </div>
      <div className="skills" data-aos="zoom-in">
        <div class="skill-bars">
          <h3>Frontend</h3>
          <hr style={{ border: "1px solid rgb(0 0 0)" }} />
          <div class="bar">
            <i class="devicon-html5-plain-wordmark colored"></i>

            <i class="devicon-css3-plain-wordmark colored"></i>

            <i class="devicon-sass-original colored"></i>

            <i class="devicon-tailwindcss-original-wordmark colored"></i>

            <i class="devicon-bootstrap-plain colored"></i>

            <i class="devicon-typescript-plain colored"></i>

            <i class="devicon-javascript-plain colored"></i>

            <i class="devicon-react-original colored"></i>

            <i class="devicon-nextjs-original-wordmark"></i>

            <i class="devicon-materialui-plain colored"></i>

            <i class="devicon-redux-original colored"></i>

            <i class="devicon-jquery-plain colored"></i>

            <i class="devicon-babel-plain colored"></i>
          </div>
        </div>

        <div class="skill-bars">
          <h3>Backend</h3>
          <hr style={{ border: "1px solid rgb(0 0 0)" }} />
          <div class="bar">
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-graphql-plain colored"></i>
          </div>
        </div>

        <div class="skill-bars">
          <h3>Programming</h3>
          <hr style={{ border: "1px solid rgb(0 0 0)" }} />
          <div class="bar">
            <i class="devicon-cplusplus-plain colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            {/* <i class="devicon-rust-plain"></i> */}
            <i class="devicon-java-plain-wordmark colored"></i>
          </div>
        </div>

        <div class="skill-bars">
          <h3>Tools Used</h3>
          <hr style={{ border: "1px solid rgb(0 0 0)" }} />
          <div class="bar">
            <i class="devicon-vscode-plain colored"></i>
            <i class="devicon-git-plain colored"></i>
            <i class="devicon-github-original"></i>
            <i class="devicon-npm-original-wordmark colored"></i>
            <i class="devicon-yarn-plain-wordmark colored"></i>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Skill;
