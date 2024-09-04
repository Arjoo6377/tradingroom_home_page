import React from "react";

function HeroSection() {
  return (
    <div className="bg-black text-white rounded-3xl flex flex-col md:flex-row relative w-[95%] md:w-[85%] h-[600px] md:h-[450px] mx-auto  md:p-0">
      <div className="flex flex-col ml-0 md:ml-36 absolute mt-8 md:mt-8 w-full md:w-[50%] h-[400px] md:h-[300px]">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-center md:text-left mt-16 leading-snug md:leading-normal">
          Apply to Join My <br className="hidden md:block" /> Trading Challenge
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4 md:mb-7 mt-4">
          <div className="flex -space-x-2 overflow-hidden mb-3 md:mb-0">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
              alt="Profile"
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0001-qs6zomruy68vz3v1s53pifpmkh9civej414uj7lrf4.jpg"
              alt="Profile"
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
              alt="Profile"
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0004-qs6zoonjbubgmbsbh5wynf8jr902y9lzsafthriz2o.jpg"
              alt="Profile"
            />
          </div>
          <span className="text-lg text-center md:ml-7  mt-6">
            Join 584700+ traders inside
          </span>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 w-[80%] md:w-[70%] rounded-full mt-1 mx-auto md:mx-0">
          Explore Membership →
        </button>
      </div>
      <div className=" md:mt-12 mr-4 md:ml-auto bg-black w-full md:w-[49%] h-[1000px] md:h-[400px] flex  mt-72 p-2">
        <img
          className="rounded-lg h-auto w-full  md:w-full md:h-[100%] "
          src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-07.jpg"
          alt="Trading Dashboard"
        />
      </div>
    </div>
  );
}

export default HeroSection;
