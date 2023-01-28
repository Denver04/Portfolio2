import React from 'react';
import "../Css/header.css";
import { Link } from 'react-router-dom';
import Resume from "../images/RESUME.pdf"

function Navbar() {
  return (
    <div className='header'>
        <div className='head-part1'>
            <div className='head-elments'>
                <Link className='a' to="/">Home</Link>
                {/* <a className='a' href='#project'>Projects</a>
                <a className='a' href='#education'>Education</a>
                <a className='a' href='#contact'>Contact</a> */}
                <Link className='a' to="/skill">Skill</Link>
                <Link className='a' to="/project">Project</Link>
                {/* <Link className='a' to="/contact">Contact</Link> */}
                <a className="a" href={Resume} download>Download Resume</a>
            </div>
        </div>
        {/* <div className='head-part2 head-elements'>
        <a className="a" href={Resume} download> Download Resume</a>
        </div> */}
    </div>
  )
}

export default Navbar;