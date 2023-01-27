import React from "react";
import "../Css/project.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <div className="project project-head">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Aimore</h2>
              <p>
                It is a food website in which you can add or delete food item
                from your cart. Not responsive though. I also implemented the
                search system via name of item. Routing is also done.
                <div className="used">
                  <p>
                    <strong>Used : </strong>HTML , CSS , Javascript , ReactJS ,
                    and Redux.
                  </p>
                </div>
              </p>
              <div className="iccon">
                <a
                  href="https://denver04.github.io/Aimore/"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/Denver04/Aimore" target="_blank" className="abcs">
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
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
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
              <h2>Insta Clone</h2>
              <p>
                A website similar to Instagram in which you can like the image
                by either clicking the like button or double tapping over image.
                It is fully responsive. On each refesh likes will come to its
                initial value.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , Javascript , and ReactJS.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
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
              <h2>Google keep Clone</h2>
              <p>
                It is a clone of Google Keep app. You can add or delete the
                notes. A very similar UI to Keep app is given. Background
                texture is also provided.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , Javascript , and ReactJS.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
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
              <h2>Shopping Website</h2>
              <p>
                A shopping website I made for an intern. It is very simple with
                no high-fi UI. The texture is also kept to minimal as I made
                this in one day.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , Javascript , and ReactJS.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
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
              <h2>Simon Buzzer Game</h2>
              <p>
                A buzzer game in which we have to press the pop-up button
                in sequence from beginning in each pop-up. If you break the
                sequence it will give you a red buzzer. You can use this to
                make your memory power stronger.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , and
                  <mark>Javascript</mark>.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>06</h1>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Drum Kit</h2>
              <p>
                A simple music class I tried to make. In this you can either
                click the drum or press the required keyboard button to listen
                the sound.
              </p>
              <div className="used">
                <p>
                  <strong>Used : </strong>HTML , CSS , 
                  <mark>Javascript</mark> , and <mark>JQuery</mark>.
                </p>
              </div>
              <div className="iccon">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="face face2">
            <h1>07</h1>
          </div>
        </div>
        {/* <div className="card">
          <div className="face front">
            <img src={aimora} />
          </div>
          <div className="face back">
            <div className="top-text">
              <h3>Name of Website 1</h3>
            </div>
            <div className="bottom-text">
              <p>
                a freelance product designer whs worked with huge names like
                InVision and Zendesk. His specialty is making complex tasks
                simple and intuitive to use, which is reflected in the way his
                portfolio cleanly and effectively displays his best work.{" "}
              </p>
            </div>
            <div className="link">
              <div className="tooltip linkss">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <span class="tooltiptext">host</span>
              </div>
              <div className="tooltip linkss">
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
                <span class="tooltiptext">repo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face front">
            <img src={insta} />
          </div>
          <div className="face back">
            <div className="top-text">
              <h3>Name of Website 1</h3>
            </div>
            <div className="bottom-text">
              <p>
                a freelance product designer whs worked with huge names like
                InVision and Zendesk. His specialty is making complex tasks
                simple and intuitive to use, which is reflected in the way his
                portfolio cleanly and effectively displays his best work.{" "}
              </p>
            </div>
            <div className="link">
              <div className="tooltip linkss">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <span class="tooltiptext">host</span>
              </div>
              <div className="tooltip linkss">
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
                <span class="tooltiptext">repo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face front">
            <img src={keeper} />
          </div>
          <div className="face back">
            <div className="top-text">
              <h3>Name of Website 1</h3>
            </div>
            <div className="bottom-text">
              <p>
                a freelance product designer whs worked with huge names like
                InVision and Zendesk. His specialty is making complex tasks
                simple and intuitive to use, which is reflected in the way his
                portfolio cleanly and effectively displays his best work.{" "}
              </p>
            </div>
            <div className="link">
              <div className="tooltip linkss">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <span class="tooltiptext">host</span>
              </div>
              <div className="tooltip linkss">
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
                <span class="tooltiptext">repo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face front">
            <img src={simon} />
          </div>
          <div className="face back">
            <div className="top-text">
              <h3>Name of Website 1</h3>
            </div>
            <div className="bottom-text">
              <p>
                a freelance product designer whs worked with huge names like
                InVision and Zendesk. His specialty is making complex tasks
                simple and intuitive to use, which is reflected in the way his
                portfolio cleanly and effectively displays his best work.{" "}
              </p>
            </div>
            <div className="link">
              <div className="tooltip linkss">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <span class="tooltiptext">host</span>
              </div>
              <div className="tooltip linkss">
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
                <span class="tooltiptext">repo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face front">
            <img src={drumkit} />
          </div>
          <div className="face back">
            <div className="top-text">
              <h3>Name of Website 1</h3>
            </div>
            <div className="bottom-text">
              <p>
                a freelance product designer whs worked with huge names like
                InVision and Zendesk. His specialty is making complex tasks
                simple and intuitive to use, which is reflected in the way his
                portfolio cleanly and effectively displays his best work.{" "}
              </p>
            </div>
            <div className="link">
              <div className="tooltip linkss">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="links"
                >
                  <i class="fa-solid fa-link"></i>
                </a>
                <span class="tooltiptext">host</span>
              </div>
              <div className="tooltip linkss">
                <a href="https://google.com" target="_blank" className="abcs">
                  <i class="fa-solid fa-code"></i>
                </a>
                <span class="tooltiptext">repo</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Project;
