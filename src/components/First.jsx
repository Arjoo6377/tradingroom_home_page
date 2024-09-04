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
    // return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <div className="relative bg-green-100">
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
          <div className="lg:flex lg:ml-[10%]">
            <div className="mt-4 text-center relative z-20 lg:mt-[5%] lg:text-left">
              <h1 className="text-white text-3xl font-bold lg:text-5xl">
                Your Path to Trading <br className="hidden lg:inline lg:mt-4" />{" "}
                Mastery{" "}
                <span className="text-green-400 block sm:inline">
                  Start Here
                </span>
              </h1>
              <button className="bg-green-400 p-2 rounded-lg mt-5">
                Explore Membership
              </button>
              <div className="lg:flex items-center mt-6">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0001-qs6zomruy68vz3v1s53pifpmkh9civej414uj7lrf4.jpg"
                    alt="Member 1"
                    className="rounded-full z-30 w-10 h-10 ring-4 ring-white"
                  />
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
                    alt="Member 2"
                    className="w-10 h-10 rounded-full z-20 -ml-3 ring-4 ring-white"
                  />
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
                    alt="Member 3"
                    className="w-10 h-10 rounded-full z-10 -ml-3 ring-4 ring-white"
                  />
                  <img
                    src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
                    alt="Member 4"
                    className="w-10 h-10 rounded-full z-0 -ml-3 ring-4 ring-white"
                  />
                </div>
                <div className="absolute text-center z-20 mt-5 lg:relative lg:ml-8 lg:mt-0">
                  <p className="text-white lg:mt-4">
                    15,000 Members Joined: Rated Excellent at 9.1/10 from 200
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-32 lg:mt-0 lg:h-[600px] lg:w-[40%] lg:ml-[10%]">
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-03.png"
                className="w-full h-auto object-contain absolute bottom-0 lg:w-full lg:h-full lg:object-fill "
                alt="Hero"
              />

              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-001.png"
                className="w-[60%] h-auto lg:w-full lg:h-full lg:object-fill"
                alt="Icon"
              />
            </div>
          </div>
        </div>
      </section>
      <Slide />
    </div>
  );
}

export default First;
