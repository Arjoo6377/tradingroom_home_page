import React, { useEffect, useRef } from "react";
import ProductBox from "./ProductBox";
import Reviews from "./Reviews";

const BenefitsPage = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((ref) => {
          observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-green-50 p-4 mt-16 md:mt-24 lg:mt-36">
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(200px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <p className="text-center text-base md:text-lg p-4 md:p-6 rounded mb-4 md:mb-8">
        <strong className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">
          Benefits of joining our course
        </strong>
        <br />
        <br />
        <span className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec
          <br /> ullamcorper mattis, pulvinar dapibus leo.
        </span>
      </p>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className="w-80 md:w-72 lg:w-96 h-72 md:h-80 lg:h-96 bg-teal-900 text-white flex rounded shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105"
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white mt-4 ml-5">
                Stocks Trading
              </h1>
              <p className="mt-2 md:mt-4 ml-5 text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
              </p>
              <p className="ml-5 text-sm md:text-lg mt-1">Learn more</p>
              <img
                src={`https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-01${
                  5 + index
                }-1.png`}
                className="w-64 md:w-72 lg:w-80 h-32 md:h-40 lg:h-44 ml-10 md:ml-16 mt-10 md:mt-12 lg:mt-16 mb-2"
                alt="Stocks Trading"
              />
            </div>
          </div>
        ))}
      </div>
      <ProductBox />
      <Reviews />
    </div>
  );
};

export default BenefitsPage;
