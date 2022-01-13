import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./styles.css";

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <BsStarFill color="#ffba01" />
      <BsStarFill color="#ffba01" />
      <BsStarFill color="#ffba01" />
      <BsStarHalf color="#ffba01" />
      <BsStar color="#ffba01" />
    </div>
  );
}

export default MovieStars;
