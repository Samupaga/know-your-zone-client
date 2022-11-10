import { useRef } from "react";

import { FaSearch } from "react-icons/fa";

function NavSearch() {
  const searchInputRef = useRef();

  function handleSubmit(e) {
    const input = searchInputRef.current.value;
    if (input === "") return;
    console.log(input);
    e.preventDefault();
  }

  return (
    <div className="small-search-container">
      <form className="small-form" onSubmit={handleSubmit}>
        <input
          className="small-input"
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="nav-search-btn">
          <FaSearch className="nav-search-icon" size={23} />
        </button>
      </form>
    </div>
  );
}

export default NavSearch;
