import React from 'react';
import main from "../images/main.jpg";
import "../Css/body.css";
import Education from './Education';
import Achieve from './Achieve';
import { useEffect , useState} from 'react';
import { Dna } from 'react-loader-spinner';

function Body() {

  // const [loading , setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);
  //   }, 10000000)
  // }, [])

  return (
    <div className='body'>
    {/* {
      loading ? 
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{marginTop:"10rem" , height:"100%"}}
        wrapperClass="dna-wrapper"
      /> : */}
{/* <> */}
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
            </div>
        </div>

        <div className="body-right">      
            <img className='image' src={main} alt="photo" />
        </div>

       </div>
        <Achieve />
        <Education />
        {/* </> */}
    {/* } */}
      
    </div>
  )
}

export default Body;