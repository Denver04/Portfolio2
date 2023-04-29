import React , {useEffect} from 'react';
import main from "../images/main.jpg";
import "../Css/body.css";
import Education from './Education';
import Achieve from './Achieve';
import Aos from 'aos';
import "aos/dist/aos.css"

function Body(){
  useEffect(()=>{
    Aos.init({duration:1500})
  } , [])
  return (
    <div className='body'>
      <div className='body1' data-aos="zoom-in">
        <div className='body-left'>
            <h4>Hii, I'm Abhisek</h4>
            <h5>MERN developer and a C++ programmer</h5>
            <p>Currently, I'm persuing B.E from Army Institute of Technology, Pune from Computer Science branch.</p>
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
                <a href="https://www.linkedin.com/in/abhisekkumarsingh/" target="_blank" className='linkedin'><i class="fa-brands fa-linkedin" ></i></a>
                <span class="tooltiptext">linkedin</span>
              </div>
            </div>
        </div>

        <div className="body-right">      
            <img className='image' src={main} alt="photo" />
        </div>

       </div>
        <Achieve />
        <Education />
      
    </div>
  )
}

export default Body;