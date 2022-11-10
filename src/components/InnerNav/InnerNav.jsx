import React from "react";
import { InnerNavTab } from "../";

const InnerNav = () => {
  return (
    <nav className="tab-container">
      <InnerNavTab page={"Summary"} />
      <InnerNavTab page={"Rent Prices"} />
      <InnerNavTab page={"Crime"} />
      <InnerNavTab page={"Wellbeing"} />
      <InnerNavTab page={"Demographics"} />
    </nav>
  );
};

export default InnerNav;

/* <NavLink>Summary</NavLink>
<NavLink>Rent Prices</NavLink>
<NavLink>Crime</NavLink>
<NavLink>Wellbeing</NavLink>
<NavLink>Demographics</NavLink> */

// style={({ isActive }) => ({
//     color: isActive ? "#191f38" : "#fceef0",
//     background: isActive ? "#fceef0" : "#191f38",
//   })}
