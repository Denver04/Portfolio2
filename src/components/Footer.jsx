import React from 'react';
import "../Css/footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='project3 project5'>
        <h2>Abhisek Kumar Singh</h2>
      </div>
      <div className='contacts footer-icon contacss'>
        <h2>Contact Me</h2>
        <div className='facon'>
          <a href="mailto:abhisekkumarsingh021@example.com"><i class="fa-solid fa-envelope"></i></a>
          <a href="tel:+918875209080"><i class="fa-solid fa-phone-volume"></i></a>
        </div>
      </div>
      {/* <div className='follow'> */}
        
        <div className='footer-icon contacts follow-icon'>
          <h2>Follow me On</h2>
          <div className='facon'>
            <a href="https://www.instagram.com/denver_d_deniver/" target="_blank" className='insta'><i class="fa-brands fa-instagram-square" ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100009848738409" target="_blank" className='fb'><i class="fa-brands fa-facebook-square" ></i></a>
            <a href="https://github.com/Denver04" target="_blank" className='github'><i class="fa-brands fa-github-square" ></i></a>
            <a href="https://www.linkedin.com/in/denver-abhisek-088592217/" target="_blank" className='linkedin'><i class="fa-brands fa-linkedin" ></i></a>
          </div>
          
        </div>
      {/* </div> */}
    </div>
  )
}

export default Footer