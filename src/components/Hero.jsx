import React from "react";
import Navbar from "./Navbar";
import Slide from "./Slide";
import "./navbar.css"; // Import your CSS file

function Hero() {
  return (
    <>
      {/* Fixed Section Above Navbar */}
      <div className="fixed top-0 left-0 w-full h-12 bg-black text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-50">
        <p className="text-sm">Special Offer</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs lg:text-base">
          Buy Now
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-green-100">
        <div
          className="relative bg-teal-900 text-white flex flex-col justify-between mt-12 lg:mt-0"
          style={{ minHeight: "60vh", borderRadius: "60px" }} // Adjusted minHeight for mobile
        >
          <Navbar />
          <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 py-10 lg:py-20 flex-grow">
            <div className="max-w-lg text-center lg:text-left mt-4 lg:mt-0">
              <h1 className="text-2xl lg:text-5xl xl:text-6xl font-extrabold mb-6  ml-10 leading-tight">
                Your path to trading <br /> Mastery{" "}
                <span className="text-green-400 ml-10">starts here</span>
              </h1>
              <button className="bg-green-500 text-gray-900 px-4 lg:px-6 py-2 lg:py-3 ml-10 rounded mt-4 hover:bg-green-600">
                Explore Membership
              </button>
              <div className="flex items-center justify-center lg:justify-start mt-6 ml-10 relative">
                <img
                  src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0001-qs6zomruy68vz3v1s53pifpmkh9civej414uj7lrf4.jpg"
                  alt="Member 1"
                  className="w-12 h-12 lg:w-12 lg:h-12 rounded-full z-30 mr-2 lg:mr-4"
                />
                <img
                  src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
                  alt="Member 2"
                  className="w-12 h-12 lg:w-12 lg:h-12 rounded-full z-20 -ml-4 lg:-ml-8"
                />
                <img
                  src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
                  alt="Member 3"
                  className="w-12 h-12 lg:w-12 lg:h-12 rounded-full z-10 -ml-4 lg:-ml-8"
                />
                <p className="text-xs lg:text-base ml-4 lg:ml-8">
                  15,000 Members Joined: Rated Excellent at 9.1/10 from 200
                  Reviews
                </p>
              </div>
            </div>

            {/* Images Section */}
            <div className="relative w-full lg:w-1/2 mt-10 lg:mt-5 flex justify-center lg:justify-end">
              {/* Hero Image */}
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-03.png"
                alt="Hero"
                className="relative z-20 rounded-lg w-full transform-mobile lg:transform-lg "
                style={{
                  maxWidth: "none", // Remove maxWidth to ensure full width on all screens
                  height: "auto", // Keep aspect ratio
                }}
              />
              {/* Overlay Image */}
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-001.png"
                alt="Overlay"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:top-auto lg:right-0 lg:bottom-0 rounded-lg z-10"
                style={{
                  width: "70%", // Scales with screen size
                  maxWidth: "400px", // Increase maxWidth for larger display on mobile
                  maxHeight: "300px", // Adjust height for mobile
                  transform: "translateY(60px)", // Default transform
                }}
              />
            </div>
          </div>
        </div>
        <Slide />
      </section>
    </>
  );
}

export default Hero;
