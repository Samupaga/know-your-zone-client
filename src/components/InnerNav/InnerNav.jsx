import { React, useState } from "react";
import { InnerNavTab } from "../";

const InnerNav = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="inner-nav-container">
      <nav className="tab-container">
        <InnerNavTab
          page={"Summary"}
          routeName={"/borough/summary"}
          activeState={true}
        />
        <InnerNavTab
          page={"Rent Prices"}
          routeName={"/borough/rent"}
          activeState={false}
        />
        <InnerNavTab
          page={"Crime"}
          routeName={"/borough/crime"}
          activeState={false}
        />
        <InnerNavTab page={"Wellbeing"} activeState={false} />
        <InnerNavTab
          page={"Demographics"}
          routeName={"/borough/demographics"}
          activeState={false}
        />
      </nav>
    </div>
=======
=======


>>>>>>> 690152425b9f6bbc6f852db2fea06b02d064d3ca
    <nav className="tab-container">
      <InnerNavTab page={"Summary"} routeName={"/borough/summary"} activeState={true} />
      <InnerNavTab page={"Rent Prices"} routeName={"/borough/rent"} activeState={false} />
      <InnerNavTab page={"Crime"} routeName={"/borough/crime"} activeState={false} />
      <InnerNavTab page={"Wellbeing"} routeName={"/borough/wellbeing"} activeState={false} />
      <InnerNavTab page={"Demographics"} routeName={"/borough/demographics"} activeState={false} />
    </nav>
<<<<<<< HEAD
>>>>>>> abeb87978ca014df1c5d8ba036a605a169ec6989
=======

>>>>>>> 690152425b9f6bbc6f852db2fea06b02d064d3ca
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
