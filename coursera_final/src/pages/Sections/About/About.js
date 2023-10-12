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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
      Vestibulum lorem sapien, iaculis nec diam quis, eleifend <br/>
       iaculis lorem. Aliquam orci ante, imperdiet vitae nisi efficitur <br/> efficitur ornare lacus. Vivamus augue erat, ornare id congue at <br/> egestas a nisi. Vestibulum ante
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
