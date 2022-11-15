import { CardHPP, CardWellbeing, InnerNav } from "../../components";
import "./wellbeing.css";
import { useState, useEffect } from "react";

export default function WellbeingPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wellbeingData, setWellbeingData] = useState([]);

  let boroughName = sessionStorage.getItem("borough");
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/demographics/${boroughName}/wellbeing`
      );
      const rawData = await response.json();
      console.log(rawData["data"]["wellbeing"]);
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
          <em>"{motto}"</em>
        </h3>
        <InnerNav />
        <div className="wellbeing-tile-wrapper">
          <div className="four-wellbeing">
            <CardHPP
              className={"pink four-tile"}
              heading={"Worthwhile"}
              primaryInfo={`${wellbeingData["data"]["worthwhile"]}`}
              secondaryInfo={
                "This is a measure of to what extent residents feel the things they do in their life are worthwhile, out of 10."
              }
            />
            <CardHPP
              className={"blue four-tile"}
              heading={"Happiness"}
              primaryInfo={`${wellbeingData["data"]["happiness"]}`}
              secondaryInfo={
                "This is a measure of to what extent residents feel happy in their day to day life, out of 10."
              }
            />
            <CardHPP
              className={"blue four-tile"}
              heading={"Anxiety"}
              primaryInfo={`${wellbeingData["data"]["anxiety"]}`}
              secondaryInfo={
                "This is a measure of to what extent residents feel anxious in their day to day life, out of 10."
              }
            />
            <CardHPP
              className={"pink four-tile"}
              heading={"Life Satisfaction"}
              primaryInfo={`${wellbeingData["data"]["life_satisfaction"]}`}
              secondaryInfo={
                "This is a measure of to what extent residents are satisfied with how their life is, out of 10."
              }
            />
          </div>
          <CardWellbeing className={"yellow wellbeing-card"} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-wrapper">
        <h1>Borough Info is loading...</h1>
        <h3 className="motto">
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className="wellbeing-wrapper"></div>
      </div>
    );
  }
}
