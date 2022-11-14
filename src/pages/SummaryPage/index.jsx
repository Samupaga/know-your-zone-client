import { useEffect, useState } from "react";
import {
  BigNumberCard,
  CardHIP,
  CardHPP,
  Navbar,
  Container,
  InnerNav,
} from "../../components";
import "./summary.css";

export default function SummaryPage({ navSearchSearching }) {
  const [isLoading, setIsLoading] = useState(true);
  const [boroughData, setBoroughData] = useState([]);
  const [avgLondonRent, setAvgLondonRent] = useState([]);
  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem("borough");
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/summary/${boroughName}`
      );
      const rawData = await response.json();
      setBoroughData(rawData);

      const responseTwo = await fetch("http://localhost:3000/rent/london");
      const londonData = await responseTwo.json();
      setAvgLondonRent(londonData);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  console.log(boroughData);

  if (isLoading === false) {
    return (
      <div className="page-wrapper">
        <h1>{boroughData["borough_name"]}</h1>
        <h3 className="motto">
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className="six-tile-wrapper">
          <BigNumberCard
            className={"pink six-tile"}
            value={`£${boroughData["average_monthly_rent"]}`}
            smallNumber={"pcm"}
            secondaryInfo={"Average Rent"}
          />
          <CardHIP
            className={"yellow six-tile"}
            heading={"Demographics"}
            imageSrc={
              "https://www.voxco.com/wp-content/uploads/2021/03/Demographic-Segmentation-1.jpg"
            }
            altImageText={"People standing on a pie chart"}
          />
          <BigNumberCard
            className={"pink six-tile"}
            value={
              boroughData["crime_rate_per_1000"][
                "six_month_crime_rate_per_1000"
              ]
            }
            smallNumber={"/1000"}
            secondaryInfo={"Average Crime Rate"}
          />
          <CardHPP
            className={"yellow six-tile"}
            heading={"Rent"}
            primaryInfo={`${
              boroughData["average_monthly_rent"] < avgLondonRent["rent_median"]
                ? "⬇️"
                : "⬆️"
            }`}
            secondaryInfo={`${
              boroughData["average_monthly_rent"] < avgLondonRent["rent_median"]
                ? "Below London Average"
                : "Above London Average"
            }`}
          />
          <CardHPP
            className={"pink six-tile"}
            primaryInfo={"😎"}
            secondaryInfo={"7.2 on the wellbeing score!"}
          />
          <CardHPP
            className={"yellow six-tile"}
            heading={"Crime"}
            primaryInfo={"⬇️"}
            secondaryInfo={"Below London Average"}
          />
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
        <div className="six-tile-wrapper"></div>
      </div>
    );
  }
}
