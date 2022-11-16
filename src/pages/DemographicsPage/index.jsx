import { CardHP, CardHPP, CardHPH, CardHIP, InnerNav } from '../../components';
import './demoPage.css';
import { useState, useEffect } from 'react';
import greetings from '../../assets/greetings';

import { motion, AnimatePresence } from 'framer-motion';

export default function DemographicsPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [summaryData, setSummaryData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [houseData, setHouseData] = useState([]);

  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const langResponse = await fetch(
        `http://localhost:3000/summary/${boroughName}`
      );
      const rawDataLang = await langResponse.json();
      setSummaryData(rawDataLang);

      // household data to then make graph
      const response = await fetch(`http://localhost:3000/demographics/${boroughName}/household`)
      let household = await response.json();
      setHouseData(household);

      let requestArray = [
        fetch(`http://localhost:3000/demographics/${boroughName}/religion`),
        fetch(`http://localhost:3000/demographics/${boroughName}/ethnicity`),
        fetch(`http://localhost:3000/demographics/${boroughName}/age`),
        fetch(`http://localhost:3000/demographics/${boroughName}/sex`),
      ];

      let responses = await Promise.all(requestArray);
      let data = await Promise.all(
        responses.map(async (response) => await response.json())
      );
      setAllData(data);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  const getGreeting = (lang) => {
    const hello = greetings.filter((greeting) => greeting.language == lang);
    const secondLanguageHello = hello[0].hello;
    return secondLanguageHello;
  };

  let secondReligion;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function biggestReligion() {
    let arr = allData[0];
    console.log(arr);

    if (
      arr['data'][0]['category'] != 'no_religion' &&
      arr['data'][0]['category'] != 'other_religion'
    ) {
      secondReligion = arr['data'][0]['category'];
    } else if (
      arr['data'][1]['category'] != 'no_religion' &&
      arr['data'][1]['category'] != 'other_religion'
    ) {
      secondReligion = arr['data'][1]['category'];
    } else if (
      arr['data'][2]['category'] != 'no_religion' &&
      arr['data'][2]['category'] != 'other_religion'
    ) {
      secondReligion = arr['data'][2]['category'];
    }
    let capitalizedReligion = capitalizeFirstLetter(secondReligion);
    return capitalizedReligion;
  }

  let secondPopularRace;

  function secondRace() {
    let arr = allData[1];
    if (
      arr['data'][0]['category'] != 'white' &&
      arr['data'][0]['category'] != 'other'
    ) {
      secondPopularRace = arr['data'][0]['category'];
    } else if (
      arr['data'][1]['category'] != 'white' &&
      arr['data'][1]['category'] != 'other'
    ) {
      secondPopularRace = arr['data'][1]['category'];
    } else {
      secondPopularRace = arr['data'][2]['category'];
    }
    let capitalizedRace = capitalizeFirstLetter(secondPopularRace);
    return capitalizedRace;
  }

  function ageFormatting(age) {
    switch (age) {
      case 'a0_9':
        return '0-9';
        break;
      case 'a10_17':
        return '10-17';
        break;
      case 'a18_26':
        return '18-26';
        break;
      case 'a27_35':
        return '27-35';
        break;
      case 'a36_44':
        return '36-44';
        break;
      case 'a45_53':
        return '45-53';
        break;
      case 'a54_62':
        return '54-62';
        break;
      case 'a63_71':
        return '63-71';
        break;
      case 'a72_80':
        return '72-80';
        break;
      case 'a81_':
        return '81+';
    }
    return age;
  }

  if (isLoading === false) {
    return (
      <AnimatePresence>
        <div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className='demo-tile-wrapper'
          >
            <CardHIP
              className={'pink six-tile'}
              heading={'Population of people of each race'}
              dataResponse={allData[1]}
              chartType={'donut'}
              secondaryInfo={`${
                allData[0]['borough_name']
              } is home to a large ${secondRace()} community. Be sure to check out ${
                summaryData['checkout']
              }`}
            />
            <CardHIP
              className={'blue six-tile house-type'}
              heading={'Household Composition'}
              chartType={'donut'}
              dataResponse={houseData}
              secondaryInfo={
                `Hover over the chart slices to find out the different type of occupants you can expect to find in the borough of ${houseData.borough_name}`
              }
              imageSrc={
                'https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg'
              }
              altImageText={'Speedy gonzales'}
            />
            <CardHIP
              className={'yellow six-tile'}
              heading={'Population of people following each faith'}
              chartType={'donut'}
              dataResponse={allData[0]}
              altImageText={'Speedy gonzales'}
              secondaryInfo={`The largest religious group identify as ${biggestReligion()}. However, expect to see ${
                summaryData['expect']
              } `}
            />
            <CardHPH
              className={'pink six-tile'}
              heading={'Language'}
              secondaryInfo={`The majority of people speak English but did you know that the second most commonly spoken language in ${allData[0]['borough_name']} is ${summaryData['second_lang']}?`}
              primaryInfo={`${getGreeting(summaryData['second_lang'])} 👋`}
            />
            <CardHP
              className={'blue six-tile age'}
              heading={'Age'}
              secondaryInfo={`The most prominent age group found in ${
                allData[0]['borough_name']
              } consists of people aged ${ageFormatting(
                allData[2]['data'][0]['category']
              )}, with the second highest proportion of people aged ${ageFormatting(
                allData[2]['data'][1]['category']
              )}.`}
            />
            <CardHPP
              className={'yellow six-tile'}
              heading={'Sex'}
              primaryInfo={`${
                100 < allData[3]['data'][0]['value'] ? '🙋‍♂️' : '🙋‍♀️'
              }`}
              secondaryInfo={`There are ${allData[3]['data'][0]['value']} males for every 100 females!`}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    );
  } // else {
  //   return (
  //     <div className="page-wrapper">
  //       <h1>Borough Info is loading...</h1>
  //       <h3 className="motto">
  //         <em>"We Serve"</em>
  //       </h3>
  //       <InnerNav />
  //       <div className="wellbeing-wrapper"></div>
  //     </div>
  //   );
  // }
}
