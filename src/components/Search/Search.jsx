import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search() {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  // function handleSubmit(e) {
  //   const input = searchInputRef.current.value;
  //   if (input === "") return;
  //   console.log(input);
  //   e.preventDefault();
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchInputRef.current.value;
    if (query === "") return;
    try {
      navigate(`/borough/summary/${query}`);
    } catch (error) {
      navigate("/error", { state: { message: "Failed to submit form" } });
    }
  }

  return (
    <div className="search-container">
      <form className="big-form" onSubmit={handleSubmit}>
        <input
          className="big-input"
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
