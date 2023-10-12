import React from "react";
import "./About.css";
import Image from "../../../assets/waiter.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        Located in the vibrant center of Chicago, Little Lemon is where contemporary style blends seamlessly with warm, familiar sentiments. Our eclectic and crafted menu, showcasing delightful bruschettas, juicy burgers, and revitalizing Greek salads, exemplifies our conviction that cuisine is a form of art.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt=""
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt=""
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
