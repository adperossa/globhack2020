import React from "react";
import Star from './Star';

export default function (props) {


  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i += 1) {
      stars.push(
        <Star
          selected={props.rating > i}
          key={i}
        />
      );
    }
    return stars;
  }

  return (
    <ul className="rating">
      {renderStars()}
    </ul>
  );
}