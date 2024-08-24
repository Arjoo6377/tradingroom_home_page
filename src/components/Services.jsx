import React, { useEffect, useRef, useState } from "react";

function Services() {
  const [inView, setInView] = useState(false);
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Unobserve once the element is in view
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    boxesRef.current.forEach((box) => observer.observe(box));

    return () => {
      boxesRef.current.forEach((box) => observer.unobserve(box));
    };
  }, []);

  const animationStyle = {
    transform: inView ? "translateY(0)" : "translateY(200px)",
    opacity: inView ? 1 : 0,
    transition: "transform 0.5s ease-out, opacity 1s ease-out",
  };

  return (
    <section className="bg-green-100 py-10 " style={{ height: "80vh" }}>
      <div
        className="mx-auto  lg:px-8 bg-teal-900 rounded-3xl sm:w-[100%] md:w-4/5 lg:w-3/4"
        style={{
          height: "auto",
          minHeight: "600px",
        }}
      >
        <div className="pt-1">
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-7 lg:mb-12 mt-8 sm:mt-10 lg:mt-16 text-white">
            Learn to trade with technical analysis
          </h2>
        </div>

        {/* Container for horizontal alignment */}
        <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4">
          {/* Box 1 */}
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            style={animationStyle}
            className="flex flex-col items-center justify-between w-full sm:w-64 md:w-72 lg:w-80 min-w-0 sm:h-[350px] p-4 bg-teal-800 rounded-lg shadow-md border-gray-300"
          >
            <div className="text-center mb-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-green-400">
                BEGINNER
              </h2>
            </div>
            <div className="mb-4">
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-004.png"
                alt="Beginner Icon"
                className="sm:w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
            <div className="text-center mb-4">
              <p className="text-xs sm:text-sm md:text-lg font-bold text-white">
                The best place to learn to <br /> trade.
              </p>
            </div>
            <div className="text-center text-gray-400">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <h4 className="text-green-400">View course -</h4>
          </div>

          {/* Box 2 */}
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            style={animationStyle}
            className="flex flex-col items-center justify-between w-full sm:w-64 md:w-72 lg:w-80 min-w-0 h-[350px] p-4 bg-teal-800 rounded-lg shadow-md border-white"
          >
            <div className="text-center mb-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-green-400">
                INTERMEDIATE
              </h2>
            </div>
            <div className="mb-4">
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-003.png"
                alt="Intermediate Icon"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
            <div className="text-center mb-4">
              <p className="text-xs sm:text-sm md:text-lg font-bold text-white">
                Take your trading career to the next level.
              </p>
            </div>
            <div className="text-center text-gray-400">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <h4 className="text-green-400">View course -</h4>
          </div>

          {/* Box 3 */}
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            style={animationStyle}
            className="flex flex-col items-center justify-between w-full sm:w-64 md:w-72 lg:w-80 min-w-0 h-[350px] p-4 bg-teal-800 rounded-lg shadow-md border-white"
          >
            <div className="text-center mb-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-green-400">
                ADVANCE
              </h2>
            </div>
            <div className="mb-4">
              <img
                src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-005.png"
                alt="Advance Icon"
                className="sm:w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
            <div className="text-center mb-4">
              <p className="text-xs sm:text-sm md:text-lg font-bold text-white">
                Collaborate with other professional traders.
              </p>
            </div>
            <div className="text-center text-gray-400">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <h4 className="text-green-400">View course -</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
