import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "charles edward",
    description:
      "Little Lemon's Bruschetta is a harmonious blend of tastes, where impeccably crunchy bread mingles with the ripest of tomatoes.",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
    rating: 4,
  },
  {
    id: 2,
    author: "emmanuel john",
    description:
      "The burger at Little Lemon was a culinary revelation, featuring succulent, expertly prepared meat and a harmonious combination of ingredients.",
    image:
      "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
    rating: 4,
  },
  {
    id: 3,
    author: "stephen morgan",
    description:
      "Little Lemon's Greek Salad was a delightful burst of freshness and flavor, enhanced by a top-notch dressing. ",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
            
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
