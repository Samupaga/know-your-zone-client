import { InnerNav } from '../../components';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function PageWrapper({ motto, navSearchSearching, setMotto }) {
  const [isLoading, setIsLoading] = useState(true);
  const [boroughData, setBoroughData] = useState([]);
  const [boroughFound, setBoroughFound] = useState(true);
  let boroughName = sessionStorage.getItem('borough');
  const navigate = useNavigate();
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
        setBoroughFound(true);
      } catch (err) {
        console.log(err);
        setBoroughFound(false);
      }
    }
    getBoroughInfo();
  }, [navSearchSearching]);

  // console.log('after', boroughFound);

  if (boroughData.borough_name) {
    console.log('Found');
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
  } else {
    return null;
  }
}

export default PageWrapper;
