import { useRef } from "react";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function NavSearch() {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchInputRef.current.value;
    if (query === "") return;
    try {
      // Save data to sessionStorage
      sessionStorage.setItem("borough", query);
      navigate(`/borough/summary`);
    } catch (error) {
      navigate("/error", { state: { message: "Failed to submit form" } });
    }
  }

  return (
    <div className="small-search-container">
      <form className="small-form" onSubmit={handleSubmit}>
        <input className="small-input" ref={searchInputRef} type="text" placeholder="Search..." />
        <button type="submit" className="nav-search-btn">
          <FaSearch className="nav-search-icon" size={23} />
        </button>
      </form>
    </div>
  );
}

export default NavSearch;
