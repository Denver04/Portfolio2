import React from 'react';
import main from "../images/main.jpg";
import "../Css/body.css"

function Body() {
  return (
    <div className='body'>
        <div className='body-left'>
            <h4>Hii , I'm Abhisek</h4>
            <h5>Front-end developer , Web Designer and a C++ programmer</h5>
        </div>
        <div className="body-right">      
            <img className='image' src={main} alt="photo" />
        </div>
    </div>
  )
}

export default Body;