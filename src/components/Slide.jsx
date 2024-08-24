import React from "react";
// import Services from "./Services";

function Slide() {
  const items = [
    {
      id: 1,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-1.png",
    },
    {
      id: 2,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-2.png",
    },
    {
      id: 3,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-3.png",
    },
    {
      id: 4,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-4.png",
    },
    {
      id: 5,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-6.png",
    },
    {
      id: 6,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-8.png",
    },
  ];

  // Inline styles for animation
  const slideAnimation = {
    animation: "slide 10s linear infinite",
    whiteSpace: "nowrap",
    display: "flex",
  };

  // Inline styles for the keyframes animation
  const animationKeyframes = `
    @keyframes slide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <section className="bg-green-100 h-full" style={{ height: "20vh" }}>
      <div className="text-center mx-auto  max-w-screen-xl">
        <div>
          <p className="text-lg font-medium mt-20 ">
            Collaborated with 800+ trusted worldwide partners
          </p>
        </div>
        <div className="relative overflow-hidden mt-9">
          {/* Inject keyframes animation as a style tag */}
          <style>{animationKeyframes}</style>
          <div className="flex space-x-2" style={slideAnimation}>
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 mb-4">
                <img
                  src={item.img}
                  alt={`Logo ${item.id}`}
                  className="h-16 w-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Services /> */}
    </section>
  );
}

export default Slide;
