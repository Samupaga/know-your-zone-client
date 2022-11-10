import { useRef } from "react";

import { FaSearch } from "react-icons/fa";

function Search() {
  const searchInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const input = searchInputRef.current.value;
    if (input === "") return;
    console.log(input);
  }

  return (
    <div className="search-container">
      <form>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Enter borough name to get started"
        />
        <button onClick={handleSubmit} className="search-btn">
          <FaSearch className="search-icon" size={25} />
        </button>
      </form>
    </div>
  );
}

export default Search;
