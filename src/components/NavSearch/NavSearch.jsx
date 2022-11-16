import { useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function NavSearch({ setNavSearchSearching }) {
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const [smallSearchQuery, setsmallSearchQuery] = useState("");
  const [smallFilteredBoroughList, setsmallFilteredBoroughList] = useState([]);

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

    setsmallSearchQuery(query);
    setsmallFilteredBoroughList(
      boroughList.filter((borough) =>
        borough.toLowerCase().includes(smallSearchQuery.toLowerCase())
      )
    );
  }

  function searchClick(e) {
    console.log("search click called");
    smallFilteredBoroughList[0] = e.target.id;
    sessionStorage.setItem("borough", smallFilteredBoroughList[0]);
    navigate(`/borough/summary`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let query = searchInputRef.current.value;

    if (smallSearchQuery === "") return;
    console.log(query);

    // Save data to sessionStorage
    sessionStorage.setItem("borough", smallFilteredBoroughList[0]);
    //Global state
    setNavSearchSearching((current) => !current);
    navigate(`/borough/summary`);
    searchInputRef.current.value = "";
  }

  // if (smallFilteredBoroughList.length != 0) {
  //   return (
  //     <div className='small-search-container'>
  //       <form className='small-form' onSubmit={handleSubmit}>
  //         <input
  //           className='small-input'
  //           ref={searchInputRef}
  //           type='text'
  //           placeholder='Search...'
  //           onChange={searchBoroughList}
  //         />
  //         <button type='submit' className='nav-search-btn'>
  //           <FaSearch className='nav-search-icon' size={23} />
  //         </button>
  //       </form>
  //       <div className='dropdown'>
  //         {boroughList
  //           .filter((borough) =>
  //             borough.toLowerCase().includes(smallSearchQuery.toLowerCase())
  //           )
  //           .map((borough, key) => (
  //             <a
  //               className={`dropdown-row ${key}`}
  //               id={borough}
  //               onClick={searchClick}
  //             >
  //               {borough}
  //             </a>
  //           ))}
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="small-search-container">
      <form className="small-form" onSubmit={handleSubmit}>
        <input
          className="small-input"
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
          onChange={searchBoroughList}
        />
        <button type="submit" className="nav-search-btn">
          <FaSearch className="nav-search-icon" size={23} />
        </button>
      </form>
    </div>
  );
}

export default NavSearch;
