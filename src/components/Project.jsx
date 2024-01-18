import React from "react";
import "../Css/project.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "./PageWrapper/PageWrapper";

function Project() {
  return (
    <PageWrapper title="Project" description="project page">
      <div className="project project-head">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Agri-Cure</h2>
              <p>
                This project was made for Solving <mark>India Hackathon</mark>.
                We provided the solution for the farmers to detect the{" "}
                <mark>crop disease</mark>. You can select the image and then get
                the provided results with the solution and then you can act
                accordingly. Fully responsive.
                <div className="used">
                  <p>
                    <strong>Used : </strong>HTML , CSS , ReactJS , NodeJS ,
                    Express , Python , ML , and Tensorflow
                  </p>
                </div>
              </p>
              <div className="iccon">
                <a
                  href="http://34.131.44.145/"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a
                  href="https://github.com/Denver04/leafx"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>01</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>AI-Images</h2>
              <p>
                This website is capable of generating <mark>AI images</mark>. A
                user friendly and easy to use website. This is a fully
                responsive website and it is build using ReactJS and NodeJS.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , Javascript , ReactJS ,
                  and NodeJs.
                </p>
              </div>
              <div className="iccon">
                {/* <a
                  href="https://denver-todo.netlify.app"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a> */}
                <a
                  href="https://github.com/Denver04/AeyeIMAGE"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>02</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Performance Detector</h2>
              <p>
                This website will help to detect the{" "}
                <mark>performace of the employee</mark> based on the performance
                he/she performed in the past. This is a fully responsive website
                and it is build using ReactJS and NodeJS. Tesnorflow is used for
                the ML part.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong> Javascript , ReactJS , NodeJs, and
                  Tensorflow.
                </p>
              </div>
              <div className="iccon">
                {/* <a
                  href="https://denver-todo.netlify.app"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a> */}
                <a
                  href="https://github.com/Denver04/Performance-Detector"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>03</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Growingg</h2>
              <p>
                This website is something similar to any social media website
                but is shown in different way. You can see the posts in the both
                list and grid view. This is a fully responsive website and it is
                build using NextJS. No CSS framework is used.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong> Javascript , NextJS , CSS , and
                  Unsplash API .
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://growingg.netlify.app"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a
                  href="https://github.com/Denver04/Groww"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>04</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>ToDo-Website</h2>
              <p>
                A todo app in which you can add or delete your todos. A{" "}
                <mark>due date</mark> section is also given. Your todos will not
                be deleted on refresh as I have used <mark>LocalStorage</mark>{" "}
                to store them.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , Javascript , and ReactJS.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://denver-todo.netlify.app"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a
                  href="https://github.com/Denver04/Todo"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>05</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Make Password</h2>
              <p>
                A website where a user can easily generate a strong password
                with the help of some checkbox and can copy it. You can create
                any length of password and it is fully responsive.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , and Javascript.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://makepass.netlify.app/"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a
                  href="https://github.com/Denver04/Password-generator"
                  target="_blank"
                  className="abcs"
                >
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>06</h1>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Project;
