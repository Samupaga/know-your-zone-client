import { CardHP, CardHPP, CardHPH, CardHIP, InnerNav } from "../../components";
import "./demoPage.css";

export default function DemographicsPage() {
  let males = 91.9;
  let females = 100;
  let secondLanguage = "Polish";
  let secondHi = "Dzien dobry";
  let secondHiSentence = `${secondHi} 👋`;
  let boroughName = "Wandsworth";
  let secondLargestRace = "Asian";
  let recommendedSelection = "Tooting highstreet or Tooting market for a wide selection of authentic south asian cuisine!";
  let secondLargestReligion = "Islam";
  let secondLargestReligionRecommendations = "mosques around Wandsworth such as the first purpose-built mosque, Fazl Mosque in Southfields!";
  let ageRange = "35-54";
  let ageRangePercentage = 45;
  let secondAgeRange = "under 35";
  let secondAgeRangePercentage = 34;

  return (
    <div className="page-wrapper">
      <h1>Wandsworth</h1>
      <h3 className="motto">
        <em>"We Serve"</em>
      </h3>
      <InnerNav />
      <div className="six-tile-wrapper">
        <CardHPH
          className={"pink six-tile"}
          heading={"Language"}
          secondaryInfo={`The majority of people speak English but did you know the second most commonly spoken language in ${boroughName} is ${secondLanguage}!`}
          primaryInfo={secondHiSentence}
        />
        <CardHIP
          className={"blue six-tile"}
          heading={"Race"}
          imageSrc={"https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg"}
          altImageText={"speedy gonzales"}
          secondarInfo={`${boroughName} is home to a large ${secondLargestRace} community. Be sure to check out ${recommendedSelection}`}
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
          secondaryInfo={`The majority of people living in ${boroughName} are aged ${ageRange} (${ageRangePercentage}%), with the second highest proportion of people aged ${secondAgeRange} (${secondAgeRangePercentage}%)`}
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
}
