import { useState } from "react";
import Star from "./Star";

function DisplayStar(props) {
  const [rating, setRating] = useState(props.rating);

  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
        />
      ))}
    </span>
  );
}
export default DisplayStar;