import { CardHP, CardHPP, CardHPH, CardHIP, InnerNav } from '../../components';
import './demoPage.css';
import { useState, useEffect } from 'react';
import greetings from '../../assets/greetings';

export default function DemographicsPage({ navSearchSearching }) {
  let males = 91.9;
  let females = 100;
  let secondLanguage = 'Hawaiian';
  let secondLargestRace = 'Asian';
  let recommendedSelection =
    'Tooting highstreet or Tooting market for a wide selection of authentic south asian cuisine!';
  let secondLargestReligionRecommendations =
    'mosques around Wandsworth such as the first purpose-built mosque, Fazl Mosque in Southfields!';
  let ageRange = '35-54';
  let ageRangePercentage = 45;
  let secondAgeRange = 'under 35';
  let secondAgeRangePercentage = 34;

  const [isLoading, setIsLoading] = useState(true);
  const [religionData, setReligionData] = useState([]);
  const [raceData, setRaceData] = useState([]);
  // console.log("greetings", greetings);

  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  let secondLargestReligion = '';
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/demographics/${boroughName}/religion`
      );
      const rawDataReligion = await response.json();
      const ethnicityResponse = await fetch(
        `http://localhost:3000/demographics/${boroughName}/ethnicity`
      );
      const ethnicityResponseData = await ethnicityResponse.json();
      console.log(ethnicityResponseData, 'ethnicity response data');
      setReligionData(rawDataReligion);
      setRaceData(ethnicityResponseData);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  function sortReligionData() {
    let religionArray = [];
    for (var religion in religionData) {
      religionArray.push([religion, religionData[religion]]);
    }
    religionArray.sort(function (a, b) {
      return b[1] - a[1];
    });
    return religionArray;
  }

  function secondReligion() {
    let arr = sortReligionData();
    if (arr[3][0] === 'no_religion') {
      secondLargestReligion = arr[4][0];
    } else {
      secondLargestReligion = arr[3][0];
    }
    return secondLargestReligion;
  }

  function sortRaceData() {
    let raceArray = [];
    console.log('Race Data', raceData);
    for (var race in raceData) {
      raceArray.push([race, raceArray[race]]);
    }
    raceArray.sort(function (a, b) {
      return b[1] - a[1];
    });
    return raceArray;
  }

  function secondRace() {
    let arr = sortRaceData();
    if (arr[3][0] === 'no_religion') {
      secondLargestRace = arr[4][0];
    } else {
      secondLargestRace = arr[3][0];
    }
    console.log('Second largest race is: ', secondLargestRace);
    return secondLargestRace;
  }

  const getGreeting = (lang) => {
    const hello = greetings.filter((greeting) => greeting.language == lang);
    const secondLanguageHello = hello[0].hello;
    return secondLanguageHello;
  };

  // console.log(getGreeting("Polish"));

  if (isLoading === false) {
    return (
      <div className='page-wrapper'>
        <h1>{religionData['borough_name']}</h1>
        <h3 className='motto'>
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className='six-tile-wrapper'>
          <CardHPH
            className={'pink six-tile'}
            heading={'Language'}
            secondaryInfo={`The majority of people speak English but did you know the second most commonly spoken language in ${boroughName} is ${secondLanguage}!`}
            primaryInfo={`${getGreeting(secondLanguage)} 👋`}
          />
          <CardHIP
            className={'blue six-tile'}
            heading={'Race'}
            imageSrc={
              'https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg'
            }
            altImageText={'speedy gonzales'}
            secondaryInfo={`${boroughName} is home to a large ${secondRace()} community. Be sure to check out ${recommendedSelection}`}
          />
          <CardHIP
            className={'yellow six-tile house-type'}
            heading={'House Type'}
            secondaryInfo={"Here's what the makeup of houses tend to look like"}
            imageSrc={
              'https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg'
            }
            altImageText={'Speedy gonzales'}
          />
          <CardHIP
            className={'yellow six-tile'}
            heading={'Religion'}
            imageSrc={
              'https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg'
            }
            altImageText={'Speedy gonzales'}
            secondaryInfo={`The second most followed religion is ${secondReligion()}. Expect to see ${secondLargestReligionRecommendations} `}
          />
          <CardHP
            className={'pink six-tile age'}
            heading={'Age'}
            secondaryInfo={`The majority of people living in ${religionData['borough_name']} are aged ${ageRange} (${ageRangePercentage}%), with the second highest proportion of people aged ${secondAgeRange} (${secondAgeRangePercentage}%)`}
          />
          <CardHPP
            className={'blue six-tile'}
            heading={'Sex'}
            primaryInfo={`${females < males ? '👨‍💼' : '🙍‍♀️'}`}
            secondaryInfo={`There are ${females} females to every ${males} males!`}
          />
        </div>
      </div>
    );
  } else {
    return <h1>Borough info is loading.....</h1>;
  }
}
