import React from "react";
import TradingPage from "./components/TradingPage";
import BenefitsPage from "./components/BenefitsPage";
import LatestArticles from "./components/LatestArticles";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import First from "./components/First";
import Services from "./components/Services";

function App() {
  return (
    <div className="App overflow-x-hidden overflow-hidden">
      <First />

      <Services />
      <div className="">
        <TradingPage />
      </div>

      <BenefitsPage />

      <LatestArticles />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
