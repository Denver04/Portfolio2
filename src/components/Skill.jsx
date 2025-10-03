import React, { useEffect, useRef } from "react";
import "../Css/skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";
import gsap from "gsap";

function Skill() {

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const sections = gsap.utils.toArray(".skill-bars .bar i");

    const tl = gsap.timeline({
      delay: 0.1,
      defaults: { ease: "back.out(1.7)" },
    });

    tl.from(sections, {
      opacity: 0,
      y: 50,
      scale: 0.5,
      rotate: -180,
      stagger: 0.03,
    }).to(sections, {
      opacity: 1,
      y: 0,
      scale: 1.2,
      rotate: 0,
      duration: 0.3,
      yoyo: false,
      stagger: 0.1,
    });

    sections.forEach((icon) => {
      // icon.style.display = "inline-block"; // ensure transforms apply properly
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          rotate: 0,
          scale: 1.5,
          duration: 0.3,
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          rotate: 0,
          scale: 1,
          duration: 0.3,
        });
      });
    });

    return () => tl.kill();
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
