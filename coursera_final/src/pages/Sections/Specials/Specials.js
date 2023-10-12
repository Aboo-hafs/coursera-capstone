import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The renowned Greek salad features fresh romaine lettuce bell peppers olives and our signature Chicago-style feta cheese, all topped with crispy garlic and rosemary croutons for added crunch.",
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta features grilled bread that is coated with garlic, sprinkled with salt, and drizzled with olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This recipe is directly from Grandma's cookbook, and every single ingredient has been carefully selected to ensure the utmost authenticity.",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$ 5.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
