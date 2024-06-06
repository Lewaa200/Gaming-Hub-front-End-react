import React from 'react'
import image from"../assets/gtaV.jpg";
import"../Styles/About.css";
function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
        style={{ backgroundImage: `url(${image})` }}></div>
        <div className="aboutBottom">
        <h1>About Us</h1>
        </div>
    </div>
  )
}

export default About