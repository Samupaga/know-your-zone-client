import { CardHPP, CardWellbeing, InnerNav } from '../../components';
import './wellbeing.css';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function WellbeingPage({ navSearchSearching, motto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wellbeingData, setWellbeingData] = useState([]);

  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/demographics/${boroughName}/wellbeing`
      );
      const rawData = await response.json();
      console.log(rawData);
      console.log(rawData['data']['wellbeing']);
      console.log(wellbeingData);
      setWellbeingData(rawData);
      setIsLoading(false);
    }

    getBoroughInfo();
  }, [navSearchSearching]);

  // console.log("wellbeing data", wellbeingData);

  if (isLoading === false) {
    return (
      <AnimatePresence>
        <div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className='wellbeing-tile-wrapper'
          >
            <div className='four-wellbeing'>
              <CardHPP
                className={'pink four-tile'}
                heading={'Worthwhile'}
                primaryInfo={`${wellbeingData['data'][1]['value']}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel the things they do in their life are worthwhile, out of 10.'
                }
              />
              <CardHPP
                className={'blue four-tile'}
                heading={'Happiness'}
                primaryInfo={`${wellbeingData['data'][2]['value']}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel happy in their day to day life, out of 10.'
                }
              />
              <CardHPP
                className={'blue four-tile'}
                heading={'Anxiety'}
                primaryInfo={`${wellbeingData['data'][3]['value']}`}
                secondaryInfo={
                  'This is a measure of to what extent residents feel anxious in their day to day life, out of 10.'
                }
              />
              <CardHPP
                className={'pink four-tile'}
                heading={'Life Satisfaction'}
                primaryInfo={`${wellbeingData['data'][0]['value']}`}
                secondaryInfo={
                  'This is a measure of to what extent residents are satisfied with how their life is, out of 10.'
                }
              />
            </div>
            <CardWellbeing className={'yellow wellbeing-card'} />
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
