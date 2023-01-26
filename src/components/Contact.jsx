import React , { useRef } from 'react';
import "../Css/contact.css"
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_kuv1l9e', 'template_4ypd61k', form.current, 'vqCFLk2iKYYKNXLX_')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        };

  return (
    <div className='contact'>
        <div className='contact-head'><h1>Contact Me</h1></div>
            {/* <div className='contacts'>
                <a href="mailto:abhisekkumarsingh021@example.com"><i class="fa-solid fa-envelope"></i></a>
                <a href="tel:+918875209080"><i class="fa-sharp fa-solid fa-phone"></i></a>
            </div> */}
        <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
            <div className='input'>
                <label>Name</label>
                <input type="text" name="from_name" placeholder='Name' />
            </div>
            <div className='input'>
                <label>Email</label>
                <input type="email" name="from_email" placeholder='Enter your email'/>
            </div>
            <div className='input'>
                <label>Message</label>
                <textarea name="message" placeholder='Message'/>
            </div>
            {/* <input type="submit" value="Send" /> */}
            <div className='button'><button type='submit' value="send">Send</button></div>
            </form>
        </div>
    </div>
  )
}

export default Contact