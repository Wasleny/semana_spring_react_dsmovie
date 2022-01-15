import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MoviePage } from "types/movie";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button onClick={() => onChange(page.number - 1)} className="dsmovie-pagination-button" disabled={page.first}>
          <IoIosArrowBack />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button onClick={() => onChange(page.number + 1)} className="dsmovie-pagination-button" disabled={page.last}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
