import { CardHPP, CardWellbeing, InnerNav } from '../../components';
import './wellbeing.css';
import { useState, useEffect } from 'react';

export default function WellbeingPage() {
  let worthwhileScore = 7.71;
  let happinessScore = 7.5;
  let anxietyScore = 3.15;
  let lifeSatisfactionScore = 7.65;

  const [isLoading, setIsLoading] = useState(true);
  const [wellbeingData, setWellbeingData] = useState([]);

  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/summary/${boroughName}`
      );
      const rawData = await response.json();
      setWellbeingData(rawData);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  if (isLoading === false) {
    return (
      <div className='page-wrapper'>
        <h1>Wandsworth</h1>
        <h3 className='motto'>
          <em>"We Serve"</em>
        </h3>
        <InnerNav />
        <div className='wellbeing-wrapper'>
          <div className='five-tile-wrapper'>
            <div className='four-wellbeing'>
              <CardHPP
                className={'pink four-tile'}
                heading={'Worthwhile'}
                primaryInfo={`${worthwhileScore}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel the things they do in their life are worthwhile, out of 10.'
                }
              />
              <CardHPP
                className={'blue four-tile'}
                heading={'Happiness'}
                primaryInfo={`${happinessScore}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel happy in their day to day life, out of 10.'
                }
              />
              <CardHPP
                className={'blue four-tile'}
                heading={'Anxiety'}
                primaryInfo={`${anxietyScore}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel anxious in their day to day life, out of 10.'
                }
              />
              <CardHPP
                className={'pink four-tile'}
                heading={'Life Satisfaction'}
                primaryInfo={`${lifeSatisfactionScore}`}
                secondaryInfo={
                  'This is a measure of to what extent residents are satisfied with how their life is, out of 10.'
                }
              />
            </div>
            <CardWellbeing className={'yellow wellbeing-card'} />
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
        <div className='wellbeing-wrapper'></div>
      </div>
    );
  }
}
