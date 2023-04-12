import React from 'react';
import "../Css/header.css";
import { Link } from 'react-router-dom';
import Resume from "../images/resume.pdf"
import { useState } from 'react';

function Navbar() {

  const [bar_class , setBar] = useState("hamburger unclicked")
  const [menu , setMenu] = useState("head-elments unvisible")
  const [mainBar , setMainBar] = useState("bars middle")
  const [burger , setBurger] = useState(true);
  const [ismenuCLicked , setMenuSetClicked] = useState(false)

  const clicked = () => {
    if(!ismenuCLicked){
      setBar("hamburger clicked");
      setMenu("head-elments visible");
      setMainBar("bars")
      setBurger(!burger);
    }
    // else{
    //   setBar("hamburger unclicked");
    //   setMenu("head-elments unvisible");
    //   setMainBar("bar middle");
    // }
    setMenuSetClicked(!ismenuCLicked);
  }

  const crossed = () => {
    setBar("hamburger unclicked");
    setMenu("head-elments unvisible");
    setMainBar("bars middle");
    setMenuSetClicked(!ismenuCLicked);
    setBurger(!burger);
  }
  
  return (
    <div className='header'>
        <div className='head-part1'>
            <div className={menu}>
                <Link className='a' to="/">Home</Link>
                {/* <a className='a' href='#project'>Projects</a>
                <a className='a' href='#education'>Education</a>
                <a className='a' href='#contact'>Contact</a> */}
                <Link className='a' to="/skill">Skills</Link>
                <Link className='a' to="/project">Projects</Link>
                {/* <Link className='a' to="/contact">Contact</Link> */}
                <a className="a" href={Resume} download>Download Resume</a>
            </div>
        </div>
        {/* <div className='head-part2 head-elements'>
        <a className="a" href={Resume} download> Download Resume</a>
        </div> */}
        {
          burger ? 
          <div className={mainBar} onClick={clicked}>
          <span className={bar_class}></span>
          <span className={bar_class}></span>
          <span className={bar_class}></span>
        </div>
        :
        <i class="fa-solid fa-circle-xmark fa-xl" style={{padding:"30px"}} onClick={crossed}></i>
        }
    </div>
  )
}

export default Navbar;
