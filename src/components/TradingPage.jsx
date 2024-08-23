import React, { useEffect, useRef, useState } from "react";

const TradingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRefs = useRef([]);
  const imageRefs = useRef([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    // Observe boxes
    const boxElements = boxRefs.current;
    boxElements.forEach((element) => {
      observer.observe(element);
    });

    // Observe images
    const imageElements = imageRefs.current;
    imageElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      boxElements.forEach((element) => {
        observer.unobserve(element);
      });
      imageElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Add a delay before setting visibility to true
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const name = [
    {
      id: 1,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-008.png",
    },
    {
      id: 2,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-009.png",
    },
    {
      id: 3,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-010.png",
    },
    {
      id: 4,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-011-1.png",
    },
    {
      id: 5,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-012-1.png",
    },
    {
      id: 6,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-013.png",
    },
  ];

  const fadeInStyle = {
    opacity: 0,
    transform: "translateY(200px)",
    transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
  };

  const visibleStyle = {
    opacity: 1,
    transform: "translateY(0)",
  };

  return (
    <div className="mt-6  lg:mt-16">
      {" "}
      {/* Adjust margin top for different screen sizes */}
      <div className="relative flex flex-col bg-white lg:flex-row ">
        <div className="relative flex justify-center lg:block">
          {/* First Image */}
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-01.jpg"
            alt="First Image"
            style={{
              ...fadeInStyle,
              ...(isVisible ? visibleStyle : {}),
            }}
            className="mt-10 lg:ml-72 lg:mt-28 w-3/4 lg:w-[550px] lg:h-[300px]"
          />
          {/* Second Image */}
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-02.jpg"
            alt="Second Image"
            style={{
              ...fadeInStyle,
              ...(isVisible ? visibleStyle : {}),
            }}
            className="absolute top-10 lg:top-20 right-0 lg:right-1/4 transform translate-x-[30%] lg:translate-x-[60%] translate-y-[50%] lg:translate-y-[80%] z-10 w-2/3 lg:w-[450px] lg:h-[300px]"
          />
        </div>
        <div className="relative text-left p-8 mt-10 lg:mt-32">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight whitespace-normal lg:whitespace-nowrap ml-0 lg:ml-52">
            A Trading Community <br className="hidden lg:block" />
            Dedicated To Your
            <br className="hidden lg:block" /> Success!
          </h1>
          <p className="text-gray-600 mb-6 ml-0 lg:ml-52">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-0 lg:ml-52">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-white sm:mt-7 lg:mt-24">
        <h1 className="text-center mb-4 text-5xl font-bold text-gray-600">
          Our trading learning provider
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {name.map((p, index) => (
              <div
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
                style={{
                  ...fadeInStyle,
                  ...(isVisible ? visibleStyle : {}),
                }}
                className="w-96 h-48 bg-gray-100 flex border border-transparent hover:bg-gray-200 hover:border-black shadow-md hover:shadow-lg transition-all"
              >
                <div>
                  <h1 className="text-2xl font-bold text-gray-700 mt-4 ml-5">
                    Stocks Trading
                  </h1>
                  <p className="mt-4 ml-5">
                    Lorem ipsum dolor sit amet <br /> consectetur adipiscing
                    elit
                  </p>
                  <img
                    src={p.img}
                    className="w-20 h-20 ml-72 mb-2"
                    alt="Stock Icon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPage;
