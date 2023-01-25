import React from 'react';
import "../Css/contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-head'><h1>Contact Me</h1></div>
        <div className='contacts'>
            <a href="mailto:abhisekkumarsingh021@example.com"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel:+918875209080"><i class="fa-sharp fa-solid fa-phone"></i></a>
        </div>

    </div>
  )
}

export default Contact