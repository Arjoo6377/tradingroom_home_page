import React, { useState, useEffect } from "react";

const reviews = [
  {
    text: "The crypto trading course at Traderoom is a must for anyone looking to make serious gains. My portfolio has never looked better!",
    stars: 5,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-07.jpg",
  },
  {
    text: "Joining the stock trading class at Traderoom completely transformed my trading strategies. I've doubled my portfolio in just six months!",
    stars: 4,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-01.jpg",
  },
  {
    text: "The forex class at Traderoom provided me with the tools to diversify my investments and secure substantial gains.",
    stars: 5,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-02.jpg",
  },
  {
    text: "I've taken several courses before, but none compare to the quality and effectiveness of Traderoom's stock trading class.",
    stars: 5,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-03.jpg",
  },
  {
    text: "Traderoom's crypto class is a game-changer. I went from knowing nothing to making consistent profits in a matter of weeks.",
    stars: 5,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-04.jpg",
  },
  {
    text: "I've taken several courses before, but none compare to the quality and effectiveness of Traderoom's stock trading class..",
    stars: 5,
    imgSrc:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-05.jpg",
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-teal-950 rounded-lg shadow-md mx-auto mt-28 max-w-full h-[800px]">
      {/* Centered Word */}
      <h1 className="text-2xl font-bold text-green-400 mb-4 bg-teal-800">
        Centered Word
      </h1>

      {/* Bold Paragraph */}
      <p className="font-bold text-5xl text-white">
        What our members are saying
      </p>
      <br />

      {/* Subparagraph */}
      <p className="text-gray-600 mb-8">(674029 reviews of Traderoom Online)</p>

      {/* Container for 3 boxes */}
      <div className="w-[80%] h-[50%]">
        <div className="relative w-full overflow-hidden flex justify-center px-8 h-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              // width: `${reviews.length * 33.33}%`, // Ensure full width coverage
            }}
          >
            {reviews.concat(reviews.slice(0, 3)).map((review, index) => (
              <div
                key={index}
                className="bg-teal-900 p-6 rounded-lg shadow-md w-[20%] flex-shrink-0"
              >
                <p className="text-gray-400 mb-4 mt-10">{review.text}</p>
                {/* Golden Stars */}
                <div className="flex  mb-4 mt-20">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ⭐
                    </span>
                  ))}
                </div>
                {/* Circular Image */}
                <div className=" flex">
                  <img
                    src={review.imgSrc}
                    className="w-16 h-16 rounded-full"
                    alt="Review"
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

export default ReviewSection;
