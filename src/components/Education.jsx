import React from 'react';
import "../Css/education.css";

function Education() {
  return (
    <>
    <div className='project3 project4'><h1>Education </h1></div>
    <div className='top-edu'>
    <div className='education'>
        <div className='college'>
            <h3 style={{marginBottom:"10px" , color:"#462bed"}}>Bachelor of Engineering</h3>
            <div style={{display:"flex", justifyContent:"space-between" }}><h4>Army Institue of technology</h4><p>...</p></div>
            <p>2020-2024</p>
            <p>Pune ,Maharastra</p>
        </div>
        <div className='inter'>
            <h3 style={{marginBottom:"10px" , color:"red"}}>Intermediate</h3>
            <div style={{display:"flex", justifyContent:"space-between" }}><h4>St. Joseph School Jhalawar</h4><p>88%</p></div>
            <p>2019-2020</p>
            <p>Kota ,Rajasthan</p>
        </div>
        <div className='metric'>
            <h3 style={{marginBottom:"10px" , color:"green"}}>Metriculation</h3>
            <div style={{display:"flex", justifyContent:"space-between" }}><h4>Army Public School</h4><p>89.6%</p></div>
            <p>2017-2018</p>
            <p>Agra ,Uttar Pradesh</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Education