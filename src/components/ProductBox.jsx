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
      price: "$49.99",
    },
    {
      id: 2,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-02-800x450.jpg",
      title: "Cryptocurrency",
      description: "Over 2+ hours of Training Material",
      price: "$129.99",
    },
    {
      id: 3,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-03-800x450.jpg",
      title: "Entry & Exits",
      description: "Over 2+ hours of Training Material",
      price: "$149.99",
    },
    {
      id: 4,
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-04-800x450.jpg",
      title: "Essential Candlesticks",
      description: "Over 2+ hours of Training Material",
      price: "$199.99",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center p-4 bg-teal-950 mt-20 w-full mx-auto"
      style={{ minHeight: "950px", borderRadius: "60px" }}
    >
      {/* Main Box */}
      <div className="lg:text-center sm:ml-1 w-full px-4 flex justify-center items-center">
        <h1
          className="text-1xl font-semibold bg-teal-700 w-28 mx-auto mt-24"
          style={{ borderRadius: "5px" }}
        >
          Our Product
        </h1>
      </div>

      <p className="font-bold text-5xl mt-3 text-white text-center">
        Our best trading <span className="text-green-500">Course</span>
      </p>

      {/* Product Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mt-24 w-full px-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (boxesRef.current[index] = el)}
            className={`flex flex-col bg-teal-900  rounded-lg opacity-0  transition-transform duration-500 transform translate-y-10`}
            style={{ width: "380px", height: "450px" }} // Explicitly set the height
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover mb-4 rounded-t-lg"
            />
            <h2 className="ml-8 text-2xl font-semibold text-white mb-2 sm:text-xl xs:text-lg">
              {product.title}
            </h2>
            <p className="ml-8 text-gray-400 mb-2 sm:text-sm xs:text-xs">
              {product.description}
            </p>

            {/* Horizontal Line */}
            <hr className="mx-auto w-[82%] border-gray-600 my-4" />
            <p className="text-white ml-8">Starting at:</p>
            {/* Price and Button in One Line */}
            <div className="flex flex-wrap items-center ml-8">
              <div className="flex justify-center items-center text-green-300">
                <span className="md:text-2xl  text-xl align-top">$</span>
                <span className="md:text-7xl text-2xl font-bold">49</span>{" "}
                {/* Larger size before the decimal */}
                <span className="md:text-2xl text-xl align-top">.99</span>
              </div>
              <button className="bg-green-500 text-white py-2  px-2 rounded-xl sm:h-7 sm:py-1 sm:px-1 ml-4 mt-2 xs:h-8 xs:py-1 xs:px-2">
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
