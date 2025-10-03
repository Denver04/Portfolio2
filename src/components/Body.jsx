import React, { useEffect, useRef } from "react";
import main from "../images/main.jpg";
import "../Css/body.css";
import Education from "./Education";
import Achieve from "./Achieve";
import CodeIcon from "@mui/icons-material/Code";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import SplitType from "split-type";
import Footer from "./Footer";

function Body() {
  const textRef = useRef(null);
  const achieve = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "words, chars" });
    const h3Split = new SplitType(".body-left h1", { types: "words, chars" });
    const icons = gsap.utils.toArray(".tooltip");

    gsap.from(h3Split.chars, {
      opacity: 0,
      x: +500,
      stagger: 0.1,
      duration: 1,
      // typeSpeed: 0.6,
      scale: 0.8, // zoom effect
      rotateZ: "+180",
      ease: "back.out(1.7)",
      transformOrigin: "50% 50% 0",
      onComplete: () => {
        gsap.to(h3Split.chars, {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateX: 0,
          yoyo: true,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    h3Split.chars.forEach((char) => {
      char.style.display = "inline-block"; // ensure transforms apply properly

      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          // rotate: -20,
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage:
            "linear-gradient(45deg, #ff6ec4, #7873f5, #4ade80, #22d3ee, #3b82f6)",
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 3s ease infinite",
        });
      });

      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          rotate: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
          color: "#989b99",
          backgroundImage: "none",
          animation: "none",
        });
      });
    });

    gsap.from(achieve.current, {
      scrollTrigger: {
        trigger: ".body-left h3",
        start: "top 80%",

        end: "+=500",
      },
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: -100,
      rotate: "+90",
      stagger: 0.05,
      duration: 0.2,
      typeSpeed: 20,
      ease: "circ.in",
    });

    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { duration: 0.8, ease: "back.out(1.7)" },
    });

    tl.from(icons, {
      opacity: 0,
      y: -50,
      scale: 0.5,
      rotate: -180,
      stagger: 0.6,
    }).to(icons, {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1.2,
      duration: 0.3,
      yoyo: false,
      stagger: 0.4,
    });

    return () => tl.kill();
  }, []);

  return (
    <PageWrapper title="Abhisek Kumar Singh" description="home page">
      <div className={`body`}>
        <div className="body1" data-aos="zoom-in">
          <div className="body-left">
            <h1 ref={textRef}>Hii, I'm Abhisek Kumar Singh</h1>
            <span
              className="typewriter"
              style={{
                fontWeight: "bold",
                padding: "16px 0",
                color: "#7255a2",
                fontSize: "3rem",
              }}
            >
              <Typewriter
                words={["React Developer", "C++ Programmer", "JAVA Learner"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p>
              Graduated in Computer Science from the Army Institute of
              Technology, Pune, in 2024. Presently employed as a Software
              Engineer at HSBC Technology India, Pune. Proficient in C++,
              Javascript(ReactJs, Redux Nodejs and TypeScript), JAVA and Python.
            </p>

            <div className="icons">
              {[
                {
                  href: "https://github.com/Denver04",
                  class: "fa-brands fa-github-square",
                },
                {
                  href: "https://www.linkedin.com/in/abhisekkumarsingh/",
                  class: "fa-brands fa-linkedin",
                },
                {
                  href: "https://www.hackerrank.com/abhisekkumarsin1",
                  class: "fa-brands fa-hackerrank",
                },
                {
                  href: "mailto:abhisekkumarsingh021@example.com",
                  class: "fa-solid fa-envelope",
                },
              ].map((icon, i) => (
                <div key={i} className="tooltip">
                  <a href={icon.href} target="_blank">
                    <i className={icon.class}></i>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="body-right">
            <img className="image" src={main} alt="photo" />
          </div> */}
        </div>
        <Achieve ref={achieve} />
        {/* <Education /> */}
      </div>
    </PageWrapper>
  );
}

export default Body;
