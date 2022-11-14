import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const InnerNavTab = ({ page, routeName }) => {
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  return (
    <NavLink
      to={routeName}
      className={({ isActive }) =>
        isActive ? "inner-nav-clicked" : "inner-nav"
      }
    >
      {page}
    </NavLink>
  );
};

export default InnerNavTab;

//  <NavLink className={isActive ? "inner-nav-clicked" : "inner-nav"} onClick={handleClick}>

// className={isActive ? 'inner-nav-clicked' : 'inner-nav'}
// onClick={handleClick}
