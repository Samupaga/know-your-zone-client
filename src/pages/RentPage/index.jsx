import {
  BigNumberCard,
  CardHIP,
  CardHP,
  Navbar,
  InnerNav,
} from '../../components';
import './rentPage.css';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function RentPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [averageRent, setAverageRent] = useState([]);
  const [generalRent, setGeneralRent] = useState([]);
  const [rentHistory, setRentHistory] = useState([]);

  const xAxisTitle = 'Period Covering 2018/09 to 2022/03';
  const yAxisTitle = '£ per Month';

  const londonLabels = [
    '2018/09-2019/09',
    '2019/03-2020/03',
    '2019/09-2020/09',
    '2020/03-2021/03',
    '2020/09-2021/09',
    '2021/03-2022/03',
  ];
  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/rent/${boroughName}`);
      const averageRentPrice = await response.json();
      setAverageRent(averageRentPrice[0]);
      setRentHistory(averageRentPrice);

      const responseTwo = await fetch(
        `http://localhost:3000/rent/${boroughName}/accommodation`
      );
      const generalRentInfo = await responseTwo.json();
      setGeneralRent(generalRentInfo);
      console.log(generalRentInfo);
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
          className='rent-tile-wrapper'
        >
          <CardHIP
            className={'left-column card blue rent-item-1'}
            imageSrc={
              'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
            }
            altImageText={'Gantt Chart'}
            heading={'Median Rent'}
            secondaryInfo={
              'Median rent paid across all house types for the last 4 years'
            }
            chartType={'line'}
            londonLabels={londonLabels}
            dataResponse={rentHistory.reverse().map((elem) => elem.rent_median)}
            xAxisTitle={xAxisTitle}
            yAxisTitle={yAxisTitle}
          />
          <CardHIP
            className={'right-column card blue rent-item-2'}
            chartType={'donut'}
            heading={'Split of some data'}
          />

          <BigNumberCard
            className={'left-column card navy rent-item-3'}
            value={`£${averageRent['rent_median']}`}
            smallNumber={'pcm'}
            secondaryInfo={
              'is the average rent price across all accommodation types'
            }
          />

          <div className='four-tile-wrapper right-column'>
            <CardHP
              className={'card pink four-tile rent-item-4'}
              heading={`£${generalRent[0]['rent_median']}`}
              secondaryInfo={'Single Room'}
            />
            <CardHP
              className={'card pink four-tile rent-item-5'}
              heading={`£${generalRent[5]['rent_median']}`}
              secondaryInfo={'1 Bed'}
            />
            <CardHP
              className={'card pink four-tile rent-item-6'}
              heading={`£${generalRent[4]['rent_median']}`}
              secondaryInfo={'3 Bed'}
            />
            <CardHP
              className={'card pink four-tile rent-item-7'}
              heading={`£${generalRent[2]['rent_median']}`}
              secondaryInfo={'4+ Bed'}
            />
          </div>
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
