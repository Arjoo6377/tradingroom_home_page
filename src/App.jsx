import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TradingPage from "./components/TradingPage";
import BenefitsPage from "./components/BenefitsPage";
import LatestArticles from "./components/LatestArticles";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
// import ProductBox from "./components/ProductBox";
// import Box from "./components/Box";
// import Services from "./components/Services";

function App() {
  return (
    <div className="App overflow-x-hidden overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <TradingPage />
      <BenefitsPage />
      <LatestArticles />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
