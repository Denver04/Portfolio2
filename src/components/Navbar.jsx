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
    setMenuSetClicked(!ismenuCLicked);
  }

  const crossed = () => {
    setBar("hamburger clicked");
    setMenu("head-elments unvisible");
    setMainBar("bars middle");
    setMenuSetClicked(!ismenuCLicked);
    setBurger(!burger);
  }
  
  return (
    <div className='header'>
        <div className='head-part1'>
            <div className={menu}>
                <Link className='a' to="/" onClick={crossed}>Home</Link>
                <Link className='a' to="/skill" onClick={crossed}>Skills</Link>
                <Link className='a' to="/project" onClick={crossed}>Projects</Link>
                <a className="a" href={Resume} download onClick={crossed}>Download Resume</a>
            </div>
        </div>
        {
          burger ? 
          <div className={mainBar} onClick={clicked}>
          <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
        :
        <i class="fa-solid fa-circle-xmark fa-xl solidcross" style={{padding:"30px"}} onClick={crossed}></i>
        }
    </div>
  )
}

export default Navbar;
