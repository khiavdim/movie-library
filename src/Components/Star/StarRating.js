import { useState, useEffect } from "react";
import Star from "./../Star/Star";

function StarRating({ onChange, reset }) {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };

  useEffect(() => {
		if (reset) {
      setRating(0);
    }
		}, [reset])

    return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
          name="category"
        />
      ))}
    </span>
  );
}
export default StarRating;