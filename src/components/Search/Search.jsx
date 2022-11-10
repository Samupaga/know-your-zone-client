import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search-container">
      <form>
        <input type="text" placeholder="Enter borough name to get started" />

        <button className="search-btn">
          <FaSearch className="search-icon" size={25} />
        </button>
      </form>
    </div>
  );
}

export default Search;
