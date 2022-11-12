import { CardHPP, CardWellbeing, InnerNav } from "../../components";
import "./wellbeing.css";
import { useState, useEffect } from "react";

export default function WellbeingPage({ navSearchSearching }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wellbeingData, setWellbeingData] = useState([]);

  let boroughName = sessionStorage.getItem("borough");
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/demographics/${boroughName}/wellbeing`);
      const rawData = await response.json();
      setWellbeingData(rawData);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  // console.log("wellbeing data", wellbeingData);

  if (isLoading === false) {
    return (
      <div className="page-wrapper">
        <h1>{wellbeingData["borough_name"]}</h1>
        <h3 className="motto">
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className="wellbeing-wrapper">
          <div className="five-tile-wrapper">
            <div className="four-wellbeing">
              <CardHPP
                className={"pink four-tile"}
                heading={"Worthwhile"}
                primaryInfo={`${wellbeingData["worthwhile"]}`}
                secondaryInfo={"This is a measure of to what extent residents feel the things they do in their life are worthwhile, out of 10."}
              />
              <CardHPP
                className={"blue four-tile"}
                heading={"Happiness"}
                primaryInfo={`${wellbeingData["happiness"]}`}
                secondaryInfo={"This is a measure of to what extent residents feel happy in their day to day life, out of 10."}
              />
              <CardHPP
                className={"blue four-tile"}
                heading={"Anxiety"}
                primaryInfo={`${wellbeingData["anxiety"]}`}
                secondaryInfo={"This is a measure of to what extent residents feel anxious in their day to day life, out of 10."}
              />
              <CardHPP
                className={"pink four-tile"}
                heading={"Life Satisfaction"}
                primaryInfo={`${wellbeingData["life_satisfaction"]}`}
                secondaryInfo={"This is a measure of to what extent residents are satisfied with how their life is, out of 10."}
              />
            </div>
            <CardWellbeing className={"yellow wellbeing-card"} />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Borough info is loading.....</h1>;
  }
}
