import React from "react";
import "../Css/achieve.css";

function Achieve() {
  return (
    <div className="body-achieve" style={{backgroundColor:"#efefef" , padding:"40px"}}>
      <div className="project3">
        <h1>Experience</h1>
      </div>
      <div className="achieve">
        <h3>Alecado System</h3>
        <p>
        <ul style={{listStyle:"inside"}}>
            <li>I was hired as a Frontend(ReactJS) developer.</li>
            <li>Built the <a href="https://aiverse.netlify.app" style={{textDecoration:"none" , color:"#0e4ffd"}}>NFT website</a> for the company under the guidance of the manager.</li>
            <li>Daily to Daily attending meeting which was taken by the manager in the evening time was an important part.</li>
            <li>I was doing my work under the direct guidance of the manager with my 2 colleagues.</li>
            <li>Also get my first experience of using figma.</li>
            <li>For the website, I built the middle section , card section and the footer section using <strong>HTML</strong> , <strong>CSS</strong> , and
          <strong> ReactJS.</strong></li>
        </ul>
          {/* I was the one of the main front-end developer for the company. We
          built the NFT website Site whose front-end design was under my team. I
          used <strong>ReactJS</strong> , <strong>HTML</strong> , and
          <strong> CSS</strong>. Learn to work with colleagues / manager.
          Discussing things in meet with manager was the best thing. */}
        </p>
        <div className="date"><p>May 2022 - June 2022</p></div>
      </div>
    </div>
  );
}

export default Achieve;
