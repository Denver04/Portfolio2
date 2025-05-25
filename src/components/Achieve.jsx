import React, { useEffect } from "react";
import "../Css/achieve.css";
import certificate from "../images/certificate.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import Aos from "aos";
import "aos/dist/aos.css";
import EdgeNRoots from "../images/edge_n_roots_logo.jpeg";

function Achieve() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    // style={{ backgroundColor: "#efefef" }}
    <div className="body-achieve" data-aos="zoom-in">
      <div className="project3">
        <h1>Experience</h1>
      </div>
      <div className="achieve-container" data-aos="zoom-in">
        <div className="achieve-hsbc">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <h3>HSBC</h3>
          </div>
          <p>
            <ul style={{ listStyle: "inside" }}>
              <li>Software Engineer at HSBC Technology India, Pune.</li>
              <li>
                Developed automation solutions using <strong>Python</strong> and{" "}
                <strong>Pandas</strong> to optimize legacy codebases. Designed
                tools to identify and modify pre-existing code based on dynamic
                business requirements, significantly reducing manual development
                efforts and improving code efficiency and maintainability
              </li>
              <li>
                Built <strong>RESTful APIs</strong> to facilitate end-to-end
                system integration and seamless communication between frontend
                and backend modules. Ensured high performance, scalability and
                secure data transactions in all backend services.
              </li>
            </ul>
          </p>
          <div className="date">
            <p>July 2024 - Ongoing</p>
          </div>
        </div>

        <div className="achieve-edge">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <h3>Edge N Roots</h3>
          </div>
          <p>
            <ul style={{ listStyle: "inside" }}>
              <li>Hired as a Full Stack developer</li>
              <li>
                Created multiple user interfaces using{" "}
                <strong>ReactJs, </strong> <strong>TypeScript, </strong>{" "}
                <strong>Redux, </strong>and <strong>Material-UI</strong> and
                constructed various components as part of my internship.
              </li>
              <li>
                Worked closely with the development team to effectively add my
                work to the main project, demonstrating strong teamwork and
                communication skills.
              </li>
            </ul>
          </p>
          <div className="date">
            <p>May 2023 - April 2024</p>
          </div>

          <div className="cert_down">
            <a
              className="certificate"
              href="https://drive.google.com/file/d/1bm6pRlnefuOodW_v8B1PHqH2L5tnb9qr/view?usp=sharing"
              style={{ color: "green" }}
              target="_blank"
            >
              Certificate
            </a>
            <a className="download" href={certificate} download>
              {" "}
              <DownloadIcon
                sx={{
                  fontSize: 32,
                }}
                color="primary"
              />
            </a>
          </div>
        </div>

        <div className="achieve-alecado">
          <h3>Alecado System</h3>
          <p>
            <ul style={{ listStyle: "inside" }}>
              <li>Hired as a Frontend(ReactJS) developer.</li>
              <li>
                Leveraged ReactJS and JavaScript to create a dynamic and
                engaging{" "}
                <a
                  href="https://aiverse.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#0e4ffd",
                    fontWeight: "bold",
                  }}
                >
                  NFT website
                </a>{" "}
                that effectively showcased the company's NFT offerings.
              </li>
              <li>
                Worked with two teammates to help everyone work together better,
                making the project go smoother and work better overall.
              </li>
            </ul>
          </p>
          <div className="date">
            <p>May 2022 - June 2022</p>
          </div>
          <div className="cert_down">
            <a
              className="certificate"
              href="https://drive.google.com/file/d/1pS6QQPPyFnRQpIXlpmmG94ZmH7kwsOXq/view?usp=sharing"
              style={{ color: "green" }}
              target="_blank"
            >
              Certificate
            </a>
            <a className="download" href={certificate} download>
              {" "}
              <DownloadIcon
                sx={{
                  fontSize: 32,
                }}
                color="primary"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achieve;
