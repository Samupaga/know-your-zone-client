import { InnerNav } from '../../components';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function PageWrapper({ motto, navSearchSearching, setMotto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [boroughData, setBoroughData] = useState([]);
  const [boroughFound, setBoroughFound] = useState(true);
  let boroughName = sessionStorage.getItem('borough');
  useEffect(() => {
    async function getBoroughInfo() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/summary/${boroughName}`
        );
        const rawData = await response.json();
        setBoroughData(rawData);
        setMotto(rawData['motto']);
        console.log('raw data', rawData);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setBoroughFound(false);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }
    }
    getBoroughInfo();
  }, [navSearchSearching]);
  return (
    <div className='page-wrapper'>
      <h1>{boroughData['borough_name']}</h1>
      <h3 className='motto'>
        <em>"{motto}"</em>
      </h3>
      <InnerNav />
      <Outlet />
    </div>
  );
}

export default PageWrapper;
