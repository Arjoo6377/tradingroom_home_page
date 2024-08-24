import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import Slide from "./Slide";

function First() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-green-100 ">
      <div className="fixed top-0 left-0 w-full h-12 bg-black text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-50">
        <p className="text-2xl">envatomarket</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs lg:text-base">
          Buy Now
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-green-100 overflow-hidden">
        <div
          className="relative bg-teal-900 text-white lg:h-[950px] flex flex-col justify-between mt-12 lg:mt-0"
          style={{ minHeight: "calc(100vh - 3rem)", borderRadius: "60px" }}
        >
          <Navbar />
          <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10 py-8 lg:py-20 flex-grow relative z-20">
            <div className="max-w-lg text-center lg:text-left mt-4 lg:mt-0 lg:ml-36">
              <h1 className="text-xl lg:text-4xl xl:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight">
                Your path to trading <br /> Mastery{" "}
                <span className="text-green-400">starts here</span>
              </h1>
              <button className="bg-green-500 text-gray-900 px-3 lg:px-6 py-2 lg:py-3 rounded mt-4 hover:bg-green-600">
                Explore Membership
              </button>
              <div className="lg:flex items-center justify-center lg:justify-start mt-6 relative">
                <div className="flex ml-28 lg:ml-0">
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0001-qs6zomruy68vz3v1s53pifpmkh9civej414uj7lrf4.jpg"
                    alt="Member 1"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full z-30 mr-2 lg:mr-4 ring-4 ring-white"
                  />
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
                    alt="Member 2"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full z-20 -ml-3 lg:-ml-8 ring-4 ring-white"
                  />
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
                    alt="Member 3"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full z-10 -ml-3 lg:-ml-8 ring-4 ring-white"
                  />
                </div>

                <div className="mt-2 lg:mt-0 z-30 relative">
                  <p className="text-xs lg:text-base ml-3 lg:ml-8 z-30">
                    15,000 Members Joined: Rated Excellent at 9.1/10 from 200
                    Reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 flex flex-col items-end lg:items-center lg:pr-10 z-10">
              <div className="relative">
                <img
                  src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-03.png"
                  alt="Overlay"
                  className="w-auto absolute bottom-0 z-0 h-[320px] md:h-[400px] lg:h-[500px] xl:h-[700px] lg:ml-64 sm:ml-28"
                />
                <img
                  src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-001.png"
                  alt="Hero"
                  className="z-0 w-[300px] h-[200px] md:h-[300px] lg:h-[300px] xl:h-[600px] lg:w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slide />
    </div>
  );
}

export default First;
