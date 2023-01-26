import React from 'react';
import main from "../images/main.jpg";
import "../Css/body.css";
import Education from './Education';
import Achieve from './Achieve';

function Body() {
  return (
    <div className='body'>
      <div className='body1'>
        <div className='body-left'>
            <h4>Hii , I'm Abhisek</h4>
            <h5>Front-end developer , Web Designer and a C++ programmer</h5>
            <h6>Currently, I'm persuing B.E in Army Institute of Technology , Pune from Computer Science branch.</h6>
            <div className='icons'>
              <div className='tooltip'>
                <a href="https://www.instagram.com/denver_d_deniver/" target="_blank" className='insta'><i class="fa-brands fa-instagram-square" ></i></a>
                <span class="tooltiptext">Instagram</span>
              </div>

              <div className='tooltip'>
                <a href="https://www.facebook.com/profile.php?id=100009848738409" target="_blank" className='fb'><i class="fa-brands fa-facebook-square" ></i></a>
                <span class="tooltiptext">facebook</span>
              </div>

              <div className='tooltip'>
                <a href="https://github.com/Denver04" target="_blank" className='github'><i class="fa-brands fa-github-square" ></i></a>
                <span class="tooltiptext">github</span>
              </div>

              <div className='tooltip'>
                <a href="https://www.linkedin.com/in/denver-abhisek-088592217/" target="_blank" className='linkedin'><i class="fa-brands fa-linkedin" ></i></a>
                <span class="tooltiptext">linkedin</span>
              </div>
              
              {/* <i class="fa-brands fa-discord"></i> */}
            </div>
        </div>

        <div className="body-right">      
            <img className='image' src={main} alt="photo" />
        </div>

       </div>
        {/* <hr></hr> */}
        <Achieve />
        {/* <hr></hr> */}
        <Education />
    </div>
  )
}

export default Body;