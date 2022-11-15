import {
  BigNumberCard,
  CardHIP,
  CardHP,
  Navbar,
  InnerNav,
} from '../../components';
import './rentPage.css';
import { useState, useEffect } from 'react';

export default function RentPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [averageRent, setAverageRent] = useState([]);
  const [generalRent, setGeneralRent] = useState([]);
  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/rent/${boroughName}`);
      const averageRentPrice = await response.json();
      setAverageRent(averageRentPrice[0]);

      const responseTwo = await fetch(
        `http://localhost:3000/rent/${boroughName}/accommodation`
      );
      const generalRentInfo = await responseTwo.json();
      setGeneralRent(generalRentInfo);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);
  // console.log("avg rent", averageRent);
  // console.log("gen rent", generalRent);

  if (isLoading === false) {
    return (
      <div className='page-wrapper'>
        <h1>{averageRent['borough_name']}</h1>
        <h3 className='motto'>
          <em>"{motto}"</em>
        </h3>
        <InnerNav />
        <div className='rent-tile-wrapper'>
          <CardHIP
            className={'left-column card blue rent-item-1'}
            imageSrc={
              'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
            }
            chartType={'line'}
            altImageText={'Gantt Chart'}
            secondaryInfo={'Trending rent for the past decade.'}
          />
          <CardHIP
            className={'right-column card yellow rent-item-2'}
            // imageSrc={
            //   'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
            // }
            chartType={'donut'}
            heading={'Split of some data.'}
            altImageText={'Sarah Soutoul'}
          />

          <BigNumberCard
            className={'left-column card navy rent-item-3'}
            value={`£${averageRent['rent_median']}`}
            smallNumber={'pcm'}
            secondaryInfo={'Average Rent'}
          />
          <div className='four-tile-wrapper right-column'>
            <CardHP
              className={'card pink four-tile rent-item-4'}
              heading={`£${generalRent[0]['rent_median']}`}
              secondaryInfo={'Single Room'}
            />
            <CardHP
              className={'card pink four-tile rent-item-5'}
              heading={`£${generalRent[2]['rent_median']}`}
              secondaryInfo={'1 Bed'}
            />
            <CardHP
              className={'card pink four-tile rent-item-6'}
              heading={`£${generalRent[4]['rent_median']}`}
              secondaryInfo={'3 Bed'}
            />
            <CardHP
              className={'card pink four-tile rent-item-7'}
              heading={`£${generalRent[5]['rent_median']}`}
              secondaryInfo={'4+ Bed'}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='page-wrapper'>
        <h1>Borough Info is loading...</h1>
        <h3 className='motto'>
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className='rent-tile-wrapper'></div>
      </div>
    );
  }
}
