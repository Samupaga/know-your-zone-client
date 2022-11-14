
import "./normalize.css";
import "./styles.css";

import {
  RentPage,
  HomePage,
  FAQPage,
  SummaryPage,
  CrimePage,
  DemographicsPage,
  WellbeingPage,
  NotFoundPage,
} from './pages';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {
  const [navSearchSearching, setNavSearchSearching] = useState(false);
  const [motto, setMotto] = useState('');

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Navbar setNavSearchSearching={setNavSearchSearching} />}
        >
          <Route index element={<HomePage />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='borough'>
            <Route
              path='summary'
              element={
                <SummaryPage
                  navSearchSearching={navSearchSearching}
                  motto={motto}
                  setMotto={setMotto}
                />
              }
            />
            <Route
              path='rent'
              element={
                <RentPage
                  navSearchSearching={navSearchSearching}
                  motto={motto}
                />
              }
            />
            <Route
              path='crime'
              element={
                <CrimePage
                  navSearchSearching={navSearchSearching}
                  motto={motto}
                />
              }
            />
            <Route
              path='demographics'
              element={
                <DemographicsPage
                  navSearchSearching={navSearchSearching}
                  motto={motto}
                />
              }
            />
            <Route
              path='wellbeing'
              element={
                <WellbeingPage
                  navSearchSearching={navSearchSearching}
                  motto={motto}
                />
              }
            />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
``;
