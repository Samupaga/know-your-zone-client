import "./normalize.css";
import "./styles.css";
import { RentPage, HomePage, FAQPage, SummaryPage, CrimePage, DemographicsPage, WellbeingPage } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="borough">
            <Route path="summary" element={<SummaryPage />} />
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
