import { useEffect, useState } from 'react';
import {
  BigNumberCard,
  CardHIP,
  CardHPP,
  Navbar,
  Container,
  InnerNav,
} from '../../components';
import './summary.css';

export default function SummaryPage() {
  const [isLoading, setIsLoading] = useState(true);
  //For later use - fetch request example
  // Get saved data from sessionStorage
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      // const response = await fetch(
      //   `http://localhost:3000/borough/summary?id=${boroughName}`
      // );
      // const rawData = await response.json();
      console.log('borough name', boroughName);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [boroughName]);

  if (isLoading === false) {
    return (
      <div className='page-wrapper'>
        <h1>Wandsworth</h1>
        <h3 className='motto'>
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className='six-tile-wrapper'>
          <BigNumberCard
            className={'pink six-tile'}
            value={1200}
            smallNumber={'pcm'}
            secondaryInfo={'Average Rent'}
          />
          <CardHIP
            className={'yellow six-tile'}
            heading={'Demographics'}
            imageSrc={
              'https://www.voxco.com/wp-content/uploads/2021/03/Demographic-Segmentation-1.jpg'
            }
            altImageText={'People standing on a pie chart'}
          />
          <BigNumberCard
            className={'pink six-tile'}
            value={87}
            smallNumber={'/1000'}
            secondaryInfo={'Average Crime Rate'}
          />
          <CardHPP
            className={'yellow six-tile'}
            heading={'Rent'}
            primaryInfo={'⬇️'}
            secondaryInfo={'Below London Average'}
          />
          <CardHPP
            className={'pink six-tile'}
            primaryInfo={'😎'}
            secondaryInfo={'7.2 on the wellbeing score!'}
          />
          <CardHPP
            className={'yellow six-tile'}
            heading={'Crime'}
            primaryInfo={'⬇️'}
            secondaryInfo={'Below London Average'}
          />
        </div>
      </div>
    );
  } else {
    return <h1>Borough info is loading.....</h1>;
  }
}
