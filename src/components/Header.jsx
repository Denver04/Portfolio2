import React from 'react';
import "../Css/header.css"

function Header() {
  return (
    <div className='header'>
        <div className='head-part1'>
            <div className='head-elments'>
                <a className='a' href='#home'>Home</a>
                <a className='a' href='#project'>Projects</a>
                <a className='a' href='#education'>Education</a>
                <a className='a' href='#contact'>Contact</a>
            </div>
        </div>
        <div className='head-part2'>
            <button>Change theme</button>
        </div>
    </div>
  )
}

export default Header;