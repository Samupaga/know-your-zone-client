import {
  BigNumberCard,
  CardHIP,
  CardHP,
  Navbar,
  InnerNav,
} from '../../components';
import './crimePage.css';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function SummaryPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [crimeData, setCrimeData] = useState([]);
  const [crimeStats, setCrimeStats] = useState([]);
  const [crimeRateBiannual, setCrimeRateBiannual] = useState(null);

  const xAxisTitle = 'October 2020 - October 2022';
  const yAxisTitle = 'Crime Rate';

  const londonLabels = [
    '2020-10',
    '2020-11',
    '2020-12',
    '2021-01',
    '2021-02',
    '2021-03',
    '2021-04',
    '2021-05',
    '2021-06',
    '2021-07',
    '2021-08',
    '2021-09',
    '2021-10',
    '2021-11',
    '2021-12',
    '2022-01',
    '2022-02',
    '2022-03',
    '2022-04',
    '2022-05',
    '2022-06',
    '2022-07',
    '2022-08',
    '2022-09',
  ];

  const londonCrimeRate = [
    7.48162375, 6.78606826, 6.28630808, 5.52838738, 5.49337902, 6.5864996,
    6.49625348, 7.09590281, 7.33509172, 7.443995, 7.05774997, 7.36244856,
    7.96199307, 7.78275861, 7.05533922, 7.17168439, 6.898116, 7.69848697,
    7.1771348, 7.9181802, 7.66169674, 7.86514357, 7.68611874, 7.27408911,
  ];

  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/crime/${boroughName}/average/history`
      );

      const rawData = await response.json();
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crimeTypes: [
            'Burglary',
            'Sexual Offences',
            'Violence Against the Person',

            'Theft',
            'Robbery',
            'Arson and Criminal Damage',
            'Drug Offences',
            'Vehicle Offences',
            'Miscellaneous Crimes Against Society',
            'Possession of Weapons',
            'Public Order Offences',
          ],
        }),
      };
      const crimeReponse = await fetch(
        `http://localhost:3000/crime/${boroughName}`,
        options
      );
      const crimeDataResponse = await crimeReponse.json();
      setCrimeData(rawData);
      setCrimeRateBiannual(
        rawData.slice(5).reduce((prev, curr) => curr.crime_rate + prev, 0) / 6
      );
      setCrimeStats(crimeDataResponse);
      setCrimeRateBiannual(
        rawData.slice(0, 6).reduce((prev, curr) => curr.crime_rate + prev, 0) /
          6
      );
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  if (isLoading === false) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className='crime-tile-wrapper'
        >
          <CardHIP
            className={'right-column card yellow'}
            imageSrc={
              'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
            }
            heading={'Crime counts relative to borough average'}
            dataResponse={crimeStats}
            chartType={'bar'}
            secondaryInfo={'Hover over the chart to see more information'}
            altImageText={'Sarah Soutoul'}
          />
          <CardHIP
            heading={'Monthly crime rate over the last two years'}
            className={'left-column card yellow'}
            imageSrc={
              'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
            }
            altImageText={'Gantt Chart'}
            dataResponse={crimeData.reverse().map((elem) => elem.crime_rate)}
            chartType={'line'}
            xAxisTitle={xAxisTitle}
            yAxisTitle={yAxisTitle}
            londonLabels={londonLabels}
            londonData={londonCrimeRate}
            secondaryInfo={'Current borough compared to London'}
          />
          <div className='three-tile-wrapper right-column'>
            <p className='card-heading last-year'>In the Last Year</p>
            <div className='inner-three-tile-wrapper'>
              <CardHP
                className={'pink three-tile'}
                heading={`${Math.floor(crimeStats[0]['offence_count'])}`}
                secondaryInfo={'Counts of Burglary'}
              />
              <CardHP
                className={'pink three-tile'}
                heading={`${Math.floor(crimeStats[1]['offence_count'])}`}
                secondaryInfo={'Counts of sexual offences'}
              />
              <CardHP
                className={'pink three-tile'}
                heading={`${Math.floor(crimeStats[2]['offence_count'])}`}
                secondaryInfo={'Counts of violent offences'}
              />
            </div>
          </div>
          <BigNumberCard
            className={'left-column card navy'}
            value={`${Math.floor(crimeRateBiannual)}`}
            smallNumber={'/1000'}
            secondaryInfo={'Average crime rate over the last six months'}
          />
        </motion.div>
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
