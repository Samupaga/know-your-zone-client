import { useState } from "react";
import "./normalize.css";
import "./styles.css";
import { RentPage, HomePage, FAQPage, SummaryPage } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="borough" element={<SummaryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
