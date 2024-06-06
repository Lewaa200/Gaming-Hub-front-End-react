import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/imagee.jpg'
import "../Styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
       <div className="headerContainer">
        <h1>Your go to gaming hub</h1>
        <p>YOUR BEST GAMING HUB</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div> 
      </div>
  );
}

export default Home