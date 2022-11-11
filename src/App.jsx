import "./normalize.css";
import "./styles.css";
import { RentPage, HomePage, FAQPage, SummaryPage, CrimePage, DemographicsPage, WellbeingPage } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navSearchSearching, setNavSearchSearching] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar setNavSearchSearching={setNavSearchSearching} />}>
          <Route index element={<HomePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="borough">
            <Route path="summary" element={<SummaryPage navSearchSearching={navSearchSearching} />} />
            <Route path="rent" element={<RentPage />} />
            <Route path="crime" element={<CrimePage />} />
            <Route path="demographics" element={<DemographicsPage />} />
            <Route path="wellbeing" element={<WellbeingPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
``;
