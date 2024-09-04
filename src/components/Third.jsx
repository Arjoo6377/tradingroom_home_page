import React from "react";

function Third() {
  const items = [
    {
      id: 1,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-008.png",
      title: "Stocks Trading",
    },
    {
      id: 2,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-009.png",
      title: "Forex Trading",
    },
    {
      id: 3,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-010.png",
      title: "Cryptos Trading",
    },
    {
      id: 4,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-011-1.png",
      title: "Stocks Indices",
    },
    {
      id: 5,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-012-1.png",
      title: "Commodities Trading",
    },
    {
      id: 6,
      img: "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-013.png",
      title: "Bonds Trading",
    },
  ];

  return (
    <div className="w-full p-5 bg-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Trading Learning Provider
        </h1>
      </div>
      <div className="flex md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-6 mt-16 xl:max-w-[85%]">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <div className="flex justify-between">
                {" "}
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {item.title}
                </h2>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"
                  alt="Arrow Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Lorem ipsum dolor sit amet,
                <span className=" xl:block"></span> consectetur adipiscing elit.
              </p>
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20  mb-4 ml-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Third;
