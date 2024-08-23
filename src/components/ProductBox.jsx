import React, { useEffect, useRef, useState } from "react";
import "./product.css"; // Import the CSS file for animations

const ProductBox = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const boxes = boxesRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      boxesRef.current.forEach((box, index) => {
        setTimeout(() => {
          box.classList.add(`animate-slide-up-${index + 1}`);
        }, 200 * index); // Stagger the animations
      });
    }
  }, [isVisible]);

  const products = [
    {
      id: 1,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-800x450.jpg",
      title: "Technical Analysis",
      description: "Over 2+ hours of Training Material",
      price: "$49.3",
    },
    {
      id: 2,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-02-800x450.jpg",
      title: "Crypto Currency",
      description: "Over 2+ hours of Training Material",
      price: "$49.3",
    },
    {
      id: 3,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-03-800x450.jpg",
      title: "Entry $ Exits",
      description: "Over 2+ hours of Training Material",
      price: "$49.3",
    },
    {
      id: 4,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-04-800x450.jpg",
      title: "Essential Candlesticks",
      description: "Over 2+ hours of Training Material",
      price: "$49.3",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center p-4 bg-teal-950 mt-28 w-full mx-auto"
      style={{ minHeight: "800px", borderRadius: "60px" }}
    >
      {/* Main Box */}
      <div className="lg:text-center sm:ml-1 w-full px-4">
        <h1
          className="text-1xl font-semibold bg-teal-700 w-28 mx-auto mt-16"
          style={{ borderRadius: "5px" }}
        >
          Our Product
        </h1>
        <p className="font-bold text-5xl mt-3 text-white text-center">
          Our best trading <span className="text-green-500">Course</span>
        </p>
      </div>

      {/* Product Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 w-full px-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (boxesRef.current[index] = el)}
            className={`flex flex-col bg-teal-900 shadow-lg rounded-lg w-[350px] h-[450px] sm:w-[300px] sm:h-[400px] xs:w-[280px] xs:h-[380px] opacity-0 transition-transform duration-500 transform translate-y-10`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover mb-4"
            />
            <h2 className="ml-8 text-2xl font-semibold text-white mb-2 sm:text-xl xs:text-lg">
              {product.title}
            </h2>
            <p className="ml-8 text-gray-400 mb-2 sm:text-sm xs:text-xs">
              {product.description}
            </p>

            {/* Horizontal Line */}
            <hr className="mx-auto w-1/2 border-gray-600 my-4" />

            {/* Price and Button in One Line */}
            <div className="flex justify-between items-center px-7 mt-8">
              <p className="text-5xl font-bold text-green-300 sm:text-4xl xs:text-3xl">
                {product.price}
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded sm:py-1 sm:px-3 xs:py-1 xs:px-2">
                Get Course Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBox;
