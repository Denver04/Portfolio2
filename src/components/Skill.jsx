import React, { useEffect, useRef } from "react";
import "../Css/skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";
import SplitType from "split-type";
import gsap from "gsap";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const skills = {
    Development: [
      "devicon-html5-plain-wordmark colored",
      "devicon-css3-plain-wordmark colored",
      "devicon-sass-original colored",
      "devicon-tailwindcss-original-wordmark colored",
      "devicon-bootstrap-plain colored",
      "devicon-typescript-plain colored",
      "devicon-javascript-plain colored",
      "devicon-react-original colored",
      "devicon-nextjs-original-wordmark",
      "devicon-materialui-plain colored",
      "devicon-redux-original colored",
      "devicon-jquery-plain colored",
      "devicon-babel-plain colored",
    ],
    Backend: [
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original-wordmark",
      "devicon-mongodb-plain-wordmark colored",
      "devicon-graphql-plain colored",
      "devicon-spring-original colored",
    ],
    Programming: [
      "devicon-cplusplus-plain colored",
      "devicon-python-plain-wordmark colored",
      "devicon-java-plain-wordmark colored",
    ],
    "Tools Used": [
      "devicon-vscode-plain colored",
      "devicon-git-plain colored",
      "devicon-github-original",
      "devicon-npm-original-wordmark colored",
      "devicon-yarn-plain-wordmark colored",
    ],
  };

  return (
    <PageWrapper title="Skills" description="skill I have">
      <div className="project" data-aos="zoom-in">
        <h1>My Skills</h1>
      </div>
      <div className="skills" data-aos="zoom-in">
        {Object.entries(skills).map(([category, icons]) => (
          <div key={category} className="skill-bars">
            <h3>{category}</h3>
            <hr style={{ border: "1px solid rgb(0 0 0)" }} />
            <div className="bar">
              {icons.map((icon, i) => (
                <i key={i} className={icon}></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Skill;
