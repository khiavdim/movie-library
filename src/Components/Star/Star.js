import { FaStar } from "react-icons/fa";
import './Star.css'

function Star({ filled, onClick }) {
  return (
    <FaStar 
        className="star-container"
        size={35}
        color={filled ? "#FFC93D" : "#CCCCCC"} 
        onClick={onClick} />
  );
}
export default Star;
