
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

  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/crime/${boroughName}/average/latest`);

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
          ],

        }),
      };
      const crimeReponse = await fetch(`http://localhost:3000/crime/${boroughName}`, options);
      const crimeDataResponse = await crimeReponse.json();
      setCrimeData(rawData);
      setCrimeStats(crimeDataResponse);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  if (isLoading === false) {
    return (
      <AnimatePresence>
        <div>
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
              heading={'Division of Crime'}
              altImageText={'Sarah Soutoul'}
            />
            <CardHIP

              className={"left-column card yellow"}

              imageSrc={
                'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
              }
              altImageText={'Gantt Chart'}
              secondaryInfo={'Trending crime rates for the past decade.'}
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
              value={`${Math.floor(
                crimeData['six_month_crime_rate_per_1000']
              )}`}
              smallNumber={'/1000'}
              secondaryInfo={'Average Crime Rate'}

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
