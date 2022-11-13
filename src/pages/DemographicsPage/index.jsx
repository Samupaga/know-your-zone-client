import { CardHP, CardHPP, CardHPH, CardHIP, InnerNav } from "../../components";
import "./demoPage.css";
import { useState, useEffect } from "react";
import greetings from "../../assets/greetings";

export default function DemographicsPage({ navSearchSearching }) {
  let males = 91.9;
  let females = 100;
  let secondLanguage = "Hawaiian";
  let secondLargestRace = "Asian";
  let recommendedSelection = "Tooting highstreet or Tooting market for a wide selection of authentic south asian cuisine!";
  let secondLargestReligion = "Islam";
  let secondLargestReligionRecommendations = "mosques around Wandsworth such as the first purpose-built mosque, Fazl Mosque in Southfields!";
  let ageRange = "35-54";
  let ageRangePercentage = 45;
  let secondAgeRange = "under 35";
  let secondAgeRangePercentage = 34;

  const [isLoading, setIsLoading] = useState(true);
  const [religionData, setReligionData] = useState([]);
  // console.log("greetings", greetings);

  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem("borough");
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/demographics/${boroughName}/religion`);
      const rawDataReligion = await response.json();
      setReligionData(rawDataReligion);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  console.log("religiondata", religionData);

  const getGreeting = (lang) => {
    const hello = greetings.filter((greeting) => greeting.language == lang);
    const secondLanguageHello = hello[0].hello;
    return secondLanguageHello;
  };

  // console.log(getGreeting("Polish"));

  if (isLoading === false) {
    return (
      <div className="page-wrapper">
        <h1>{religionData["borough_name"]}</h1>
        <h3 className="motto">
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className="six-tile-wrapper">
          <CardHPH
            className={"pink six-tile"}
            heading={"Language"}
            secondaryInfo={`The majority of people speak English but did you know the second most commonly spoken language in ${religionData["borough_name"]} is ${secondLanguage}!`}
            primaryInfo={`${getGreeting(secondLanguage)} 👋`}
          />
          <CardHIP
            className={"blue six-tile"}
            heading={"Race"}
            imageSrc={"https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg"}
            altImageText={"speedy gonzales"}
            secondarInfo={`${religionData["borough_name"]} is home to a large ${secondLargestRace} community. Be sure to check out ${recommendedSelection}`}
          />
          <CardHIP
            className={"yellow six-tile house-type"}
            heading={"House Type"}
            secondaryInfo={"Here's what the makeup of houses tend to look like"}
            imageSrc={"https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg"}
            altImageText={"Speedy gonzales"}
          />
          <CardHIP
            className={"yellow six-tile"}
            heading={"Religion"}
            imageSrc={"https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg"}
            altImageText={"Speedy gonzales"}
            secondaryInfo={`The second most popular religion is ${secondLargestReligion}. Expect to see ${secondLargestReligionRecommendations} `}
          />
          <CardHP
            className={"pink six-tile age"}
            heading={"Age"}
            secondaryInfo={`The majority of people living in ${religionData["borough_name"]} are aged ${ageRange} (${ageRangePercentage}%), with the second highest proportion of people aged ${secondAgeRange} (${secondAgeRangePercentage}%)`}
          />
          <CardHPP
            className={"blue six-tile"}
            heading={"Sex"}
            primaryInfo={`${females < males ? "👨‍💼" : "🙍‍♀️"}`}
            secondaryInfo={`There are ${females} females to every ${males} males!`}
          />
        </div>
      </div>
    );
  } else {
    return <h1>Borough info is loading.....</h1>;
  }
}
