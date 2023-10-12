import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/chef.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
      Vestibulum lorem sapien, iaculis nec diam quis, eleifend <br/>
       iaculis lorem. Aliquam orci ante, imperdiet vitae nisi efficitur <br/> efficitur ornare lacus. Vivamus augue erat, ornare id congue at <br/> egestas a nisi. Vestibulum ante
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt=""
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
