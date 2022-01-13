import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import './styles.css';

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <IoIosArrowBack />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <IoIosArrowForward />
          {/* <Arrow className="dsmovie-flip-horizontal" /> */}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
