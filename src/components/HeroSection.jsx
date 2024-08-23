import React from "react";

function HeroSection() {
  return (
    <section className="bg-[#09445b] text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="max-w-md md:max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold">
            Your path to trading Mastery{" "}
            <span className="text-[#64ffda]">starts here</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join 15,000 members who are mastering trading.
          </p>
          <button className="mt-6 bg-[#64ffda] text-[#0a4a6f] px-5 py-3 rounded">
            Explore Membership
          </button>
        </div>
        <div>
          <img
            src="path-to-image"
            alt="Person with Tablet"
            className="w-64 md:w-80 lg:w-96 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
