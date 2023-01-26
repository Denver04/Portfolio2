import React from 'react';
import "../Css/header.css";
import { Link } from 'react-router-dom';

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
                <Link className='a' to="/contact">Contact</Link>
            </div>
        </div>
        <div className='head-part2'>
            <button>Change theme</button>
        </div>
    </div>
  )
}

export default Navbar;