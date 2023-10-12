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
          Located in the vibrant center of Chicago, Little Lemon is where contemporary style blends seamlessly with warm, familiar sentiments. Our eclectic and crafted menu, showcasing delightful bruschettas, juicy burgers, and revitalizing Greek salads, exemplifies our conviction that cuisine is a form of art.
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
