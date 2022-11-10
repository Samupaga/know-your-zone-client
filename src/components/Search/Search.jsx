import { useRef } from "react";

import { FaSearch } from "react-icons/fa";

function Search() {
  const searchInputRef = useRef();

  function handleSubmit(e) {
    const input = searchInputRef.current.value;
    if (input === "") return;
    console.log(input);
    e.preventDefault();
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Enter borough name to get started"
        />
        <button type="submit" className="search-btn">
          <FaSearch className="search-icon" size={25} />
        </button>
      </form>
    </div>
  );
}

export default Search;
