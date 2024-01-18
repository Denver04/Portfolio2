import React, { useEffect } from "react";
import main from "../images/main2.jpg";
import "../Css/body.css";
import Education from "./Education";
import Achieve from "./Achieve";
import CodeIcon from "@mui/icons-material/Code";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";

function Body() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <PageWrapper title="Abhisek Kumar Singh" description="home page">
      <div className="body">
        <div className="body1" data-aos="zoom-in">
          <div className="body-left">
            <h4>Hii, I'm Abhisek</h4>
            <h5>MERN developer and C++ Programmer</h5>
            <p>
              Currently, I'm persuing B.E from Computer Engineering branch from
              Army Institute of Technology, Pune and right now I'm in fourth
              year.
            </p>
            <div className="icons">
              <div className="tooltip">
                <a
                  href="https://github.com/Denver04"
                  target="_blank"
                  className="github"
                >
                  <i class="fa-brands fa-github-square"></i>
                </a>
              </div>

              <div className="tooltip">
                <a
                  href="https://www.linkedin.com/in/abhisekkumarsingh/"
                  target="_blank"
                  className="linkedin"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>

              <div className="tooltip">
                <a href="https://www.hackerrank.com/abhisekkumarsin1">
                  <i class="fa-brands fa-hackerrank"></i>
                </a>
              </div>
              <div className="tooltip">
                <a href="mailto:abhisekkumarsingh021@example.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="body-right">
            <img className="image" src={main} alt="photo" />
          </div>
        </div>
        <Achieve />
        <Education />
      </div>
    </PageWrapper>
  );
}

export default Body;
