import React from "react";
import aboutImage from "../images/about-image.jpg"
import {Link} from "react-router-dom"
export default function About() {
    return(
        <div className="about-page">
            <div className="about-page-image">
                <img alt="" src={aboutImage} className="about-image"></img>
            </div>
            <div className="about-page-text">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)

                    
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="about-page-explore-vans">
                    <h1>Your destination is waiting.<br></br>Your van is ready.</h1>
                    <Link to="/vans"><button className="explore-our-vans">Explore our vans</button></Link>
                </div>
            </div>
        </div>
    )
}