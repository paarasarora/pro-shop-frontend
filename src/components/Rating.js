import React from "react";

function Rating({ value, text, color, totalStars = 5 }) {
  const stars = [];

  for (let countStars = 0; countStars !== totalStars; countStars++) {
    stars.push(
      <i
        key={countStars}
        style={{ color }}
        className={
          value - countStars > 0.5
            ? "fas fa-star"
            : value - countStars === 0.5
            ? "fas fa-star-half-alt"
            : "far-fa-star"
        }
      ></i>
    );
  }
  return (
      <div className="rating">
          <span>{stars}</span>
          <span>{text && text}</span>
      </div>
  )
}

export default Rating;
