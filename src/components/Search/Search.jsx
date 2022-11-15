import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search() {
  const searchInputRef = useRef("");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBoroughList, setFilteredBoroughList] = useState([]);

  const boroughList = [
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
  ];

  function searchBoroughList() {
    let query = searchInputRef.current.value;
    setSearchQuery(query);
    console.log("search query", searchQuery);
    setFilteredBoroughList(
      boroughList.filter((borough) =>
        borough.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }

  function searchClick(e) {
    console.log("search click called");
    filteredBoroughList[0] = e.target.id;
    sessionStorage.setItem("borough", filteredBoroughList[0]);
    navigate(`/borough/summary`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //if (searchQuery === '') return;
    try {
      // Save data to sessionStorage
      sessionStorage.setItem("borough", filteredBoroughList[0]);
      navigate(`/borough/summary`);
    } catch (error) {
      navigate("/error", { state: { message: "Failed to submit form" } });
    }
  }

  if (filteredBoroughList.length != 0) {
    return (
      <div className="search-container">
        <form className="big-form" onSubmit={handleSubmit}>
          <input
            className="big-input"
            ref={searchInputRef}
            onChange={searchBoroughList}
            type="text"
            placeholder="Enter a borough to get started"
          />
          <button type="submit" className="search-btn">
            <FaSearch className="search-icon" size={25} />
          </button>
        </form>
        <ul className="dropdown">
          {boroughList
            .filter((borough) =>
              borough.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((borough, key) => (
              <a
                className={`dropdown-row ${key}`}
                id={borough}
                onClick={searchClick}
              >
                {borough}
              </a>
            ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="search-container">
        <form className="big-form" onSubmit={handleSubmit}>
          <input
            className="big-input"
            ref={searchInputRef}
            onChange={searchBoroughList}
            type="text"
            placeholder="Enter a borough to get started"
          />
          <button type="submit" className="search-btn">
            <FaSearch className="search-icon" size={25} />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
